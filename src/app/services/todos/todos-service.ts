import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})

export class TodoService {
    private apiUrl = environment.apiUrl;
    private token = localStorage.getItem('token');

    constructor() {}

    async list(): Promise<any> {
        try {
            const response = await fetch(`${this.apiUrl}todos`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Error de red');
            }
            const data_1 = await response.json();
            return data_1;
        } catch (error) {
            return error;
        }
    }
}
