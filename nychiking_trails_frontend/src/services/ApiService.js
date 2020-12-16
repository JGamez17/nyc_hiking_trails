class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  retrieveTrails = (id) => {
    const url = this.baseURL + `/boroughs/${id}/trails`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.forEach((trails) => new TrailComponent(trails)));
  };

  retrieveBoroughs = () =>
    fetch(this.baseURL + `/boroughs`).then((res) => res.json());

  retrieveComments = (id) => {
    const url = this.baseURL + `/trails/${id}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        data.forEach((comments) => new Comments(comments));
      });
  };

  updateLikes = (id) =>
    fetch(this.baseURL + `/trails/${id}`, {
      method: "PATCH",
    }).then((res) => res.json());
}
