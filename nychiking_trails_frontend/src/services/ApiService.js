class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  retrieveTrails = (id) => {
    const url = this.baseURL + `/${id}/trails`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.forEach((trails) => new TrailComponent(trails)));
  };

  retrieveBoroughs = () => fetch(this.baseURL).then((res) => res.json());

  retrieveComments = (borough, trail) => {
    const url = this.baseURL + `/${borough}/trails/${trail}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.forEach((comments) => new Comments(comments)));
  };
}

// console.log(comments)))
