import { Application } from "express";
import * as path from "path";
import * as dotEnv from "dotenv";

class Local {
  /**
   * Makes env configs available for your app
   * throughout the app's runtime
   */
  public static config(): any {
    dotEnv.config({ path: path.join(__dirname, "../../.env") });

    const port = process.env.PORT || 5800;
    const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || "50mb";
    const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || "50mb";
    const name = process.env.APP_NAME || "NodeTS Dashboard";
    const year = new Date().getFullYear();
    const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
    const apiPrefix = process.env.API_PREFIX || "api/vi";
    const nodeEnv = process.env.NODE_ENV || "development";

    return {
      port,
      maxParameterLimit,
      maxUploadLimit,
      copyright,
      jwtExpiresIn,
      apiPrefix,
      nodeEnv,
    };
  }

  /**
   * Injects your config to the app's locals
   */

  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Local;
