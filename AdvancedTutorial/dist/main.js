"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    const corsOptions = {
        allowedHeaders: ['content-type', 'Authorization'],
        credentials: true,
        origin: ['http://localhost:3000'],
    };
    app.enableCors(corsOptions);
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map