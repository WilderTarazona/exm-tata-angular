import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/internal/operators/finalize';
import { ISignInRequest } from '../../commons/interfaces/sign-in-request.interface';
import { UsuarioHttp } from '../../commons/http/usuario.http';
import { TataLoadingService } from '@tata/commons/components';
import { TataAlertService, TataSessionService } from '@tata/commons/services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  //#region Controles
  get isDisabled(): boolean {
    return this.form.invalid;
  }

  get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }
  //#endregion

  form: FormGroup;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private sessionService: TataSessionService,
    private loadingService: TataLoadingService,
    private alertService: TataAlertService,
    private usuarioHttp: UsuarioHttp,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  ngOnInit(): void {
  }

  signIn(): void {
    if (this.form.valid) {
      this.validateCredentials();
    }
  }

  private validateCredentials(): void {
    this.loadingService.show();
    const request: ISignInRequest = this.form.getRawValue() as ISignInRequest;

    if (request.username == 'test01' && request.password == 'test01') {
      this.getUserInfo();
    } else {
      this.loadingService.hide();
      this.alertService.showMessage('error', 'Usuario y/o contraseña incorrectos. Por favor, ingrese las credenciales correctas.')
    }
  }

  private getUserInfo(): void {
    this.usuarioHttp
      .getInfo()
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe(data => {
        this.sessionService.saveUser(data);
        this.goToAdminModule();
      });
  }

  private goToAdminModule(): void {
    console.log('this.returnUrl', this.returnUrl)
    if (this.returnUrl) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.router.navigateByUrl('/admin/task');
    }
  }
}

