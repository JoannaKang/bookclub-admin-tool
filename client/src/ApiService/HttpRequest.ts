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
    }).then(
      async res => {
        if (res.status >= 200) {
          const json = await res.json()

          if (json.alert) {
            alert(json.alert)
          }

          return json
        }
      },
      () => {
        alert('Something went wrong in server')
      },
    )
  }
}
