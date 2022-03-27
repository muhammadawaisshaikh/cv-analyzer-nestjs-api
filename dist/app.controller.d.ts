import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';
export declare class AppController {
    private authService;
    private appService;
    constructor(authService: AuthService, appService: AppService);
    getHello(): string;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
