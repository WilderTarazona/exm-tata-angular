import ls from 'localstorage-slim';
import encUTF8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';
import { environment } from 'src/environments/environment';

export class CustomSessionStorage {
  public static clear(): void {
    ls.clear();
  }
  public static set<T = unknown>(key: string, value: T): void {
    const valueEncrypter = AES.encrypt(JSON.stringify(value), environment.secretEncriptation as any).toString()
    sessionStorage.setItem(key, valueEncrypter);
  }

  public static get<T = unknown>(key: string): T | null {
    const value = sessionStorage.getItem(key);
    try {
      return JSON.parse(AES.decrypt(value as any, environment.secretEncriptation as any).toString(encUTF8));
    } catch (e) {
      return null;
    }
  }
}
