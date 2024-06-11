import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  let router: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });

    router = TestBed.inject(Router);
    navigateSpy = router.navigate as jasmine.Spy;
  });

  it('should allow activation if token is present', () => {
    spyOn(localStorage, 'getItem').and.returnValue('some-token');
    const result = authGuard(null as any, null as any);
    expect(result).toBeTrue();
  });

  it('should deny activation and navigate to login if token is absent', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const result = authGuard(null as any, null as any);
    expect(result).toBeFalse();
    expect(navigateSpy).toHaveBeenCalledWith(['/auth/login']);
  });
});