import { AirlineSeatLegroomReducedTwoTone } from '@mui/icons-material'

export class HttpRequest {
  public static BASE_URL = 'http://localhost:8080'

  static async post(url: string, payload: any): Promise<any> {
    return await fetch(this.BASE_URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(async res => {
      const json = await res.json()
      if (res.ok) {
        if (json.alert) {
          alert(json.alert)
        }
        return json
      } else {
        throw new Error(json.alert)
      }
    })
  }
}
