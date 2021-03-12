import { TestBed } from '@angular/core/testing';

import { SmsInterceptor } from './sms.interceptor';

describe('SmsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SmsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SmsInterceptor = TestBed.inject(SmsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
