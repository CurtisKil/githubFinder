class GitHub {
  constructor() {
    // 100 requests or more per hour means you need your api key and secret
    this.client_id = "68ab222de4ea6dc0d04d";
    this.client_secret = "9dcf849a0eed607173612eeaed0250b75006cc75";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
