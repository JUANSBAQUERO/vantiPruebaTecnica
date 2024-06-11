import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private key = environment.secretkey;

    constructor() {}

    async login(data: any): Promise<string> {
        try {
            if (data.username === environment.user && data.password === environment.password) {
                const token = this.generateToken(data);
                localStorage.setItem('token', token);
                return token;
            } else {
                return 'Error: El usuario o la contraseña son incorrectos';
            }
        } catch (error) {
            console.log(error);
            
            return 'Error al generar el token';
        }
    }

    private generateToken(payload: any): string {
       try {
            const header = this.base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
            const payloadStr = this.base64url(JSON.stringify(payload));
            const signature = this.base64url(CryptoJS.HmacSHA256(header + '.' + payloadStr, this.key).toString());
            return header + '.' + payloadStr + '.' + signature;
       } catch (error) {
            console.log(error);
            return 'error en la generacion del token'
       }
    }


    private base64url(source: string): string {
        return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(source))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }

    logout(): void {
        localStorage.clear();
    }

    isTokenExpired(token: string): boolean {
        const [, payloadBase64] = token.split('.');
        const payload = JSON.parse(this.base64urlDecode(payloadBase64));
        const expirationTime = payload.exp;
        return expirationTime < Date.now() / 1000;
    }

    private base64urlDecode(input: string): string {
        input = input.replace(/-/g, '+').replace(/_/g, '/');
        switch (input.length % 4) {
        case 0:
            break;
        case 2:
            input += '==';
            break;
        case 3:
            input += '=';
            break;
        default:
            throw 'Invalid token';
        }
        return decodeURIComponent(escape(atob(input)));
    }

    validateToken(token: string): boolean {
        try {
            const signature = token.split('.')[2];
            const expectedSignature = this.base64url(CryptoJS.HmacSHA256(token.split('.')[0] + '.' + token.split('.')[1], this.key).toString());   
            return signature === expectedSignature;
        } catch (error) {
            return false;
        }
    }
}