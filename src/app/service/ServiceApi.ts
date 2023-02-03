import {getDataAxios} from "../axios/getDataAxios";
import {Colleague} from "../models/colleague";

export class ServiceApi {
  private url = 'https://dev.cleverapps.io/api/v2/colleagues';

  returnData() {
    return getDataAxios<Colleague[]>(this.url);
  }

}
