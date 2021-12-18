export class HttpRequest {
  public static BASE_URL = 'http://localhost:8080'

  static async post(url: string, payload: any): Promise<any> {
    await fetch(this.BASE_URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(
      async res => {
        if (res.status >= 200) {
          const json = await res.json()
          alert(json.error)
        } else {
          alert('savedd successfully')
        }
      },
      () => {
        alert('Something went wrong in server')
      },
    )
  }
}
