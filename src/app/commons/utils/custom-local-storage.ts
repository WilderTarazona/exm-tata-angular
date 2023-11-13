import ls from 'localstorage-slim';
import encUTF8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';
import { environment } from 'src/environments/environment';

export class CustomLocalStorage {
  public static clear(): void {
    ls.clear();
  }
  public static set<T = unknown>(key: string, value: T): boolean | void {
    return ls.set(key, value);
  }
  public static get<T = unknown>(key: string): T | null {
    return ls.get<T>(key);
  }

  public static configure() {
    ls.config.encrypt = true;
    ls.config.secret = environment.secretEncriptation;
    ls.config.encrypter = (data, secret) =>
      AES.encrypt(JSON.stringify(data), secret as any).toString();
    ls.config.decrypter = (data, secret) => {
      try {
        return JSON.parse(
          AES.decrypt(data as any, secret as any).toString(encUTF8)
        );
      } catch (e) {
        return data;
      }
    };
  }
}
