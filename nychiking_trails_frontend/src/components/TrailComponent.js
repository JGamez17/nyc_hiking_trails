class TrailComponent {
  static container = document.querySelector(".trails");
  static buttonContainer = document.getElementById("buttons");

  constructor(trailInfo) {
    this.trailInfo = trailInfo;
    this.name = trailInfo.name;
    this.location = trailInfo.location;
    this.park_name = trailInfo.park_name;
    this.length = trailInfo.length;
    this.difficulty = trailInfo.difficulty;
    this.renderTrail();
    this.buttonEventListener();
  }

  buttonEventListener() {
    this.trail.addEventListener("click", this.handleOnClick);
  }

  handleOnClick = (event) => {
    if (event.target.className == "comment-button") {
      const commentInfo = document.getElementById("comments");
      commentInfo.innerHTML = "";
      const trailId = this.trailInfo.id;
      // console.log(trailId)
      api.retrieveComments(trailId);
      const trailInfo = document.getElementById("trails");
      trailInfo.innerHTML = "";
    }
  };

  // handleOnClick = (event) => {
  //   if (event.target.className == "like-btn") {
  //     const trailId = this.trailInfo.id;
  //     api
  //       .updateLikes(trailId)
  //       .then((trailId) => this.updateLikesHTML(trailId.likes));
  //   }
  // };

  // updateLikesHTML = (number) => {
  //   this.trail.innerHTML = `${number} Likes`;
  // };

  renderTrail() {
    const trail = document.createElement("div");
    trail.className = "trails-info";
    trail.dataset.id = this.trailInfo.id;
    this.trail = trail;
    this.renderInnerHTML();
    this.constructor.container.append(trail);
  }

  renderInnerHTML() {
    const {
      name,
      location,
      park_name,
      length,
      difficulty,
      likes,
    } = this.trailInfo;
    this.trail.innerHTML = `
    <h3> Name: ${name}</h3>

    <p> Location: ${location}</p>

    <p> Park Name: ${park_name}</p>

    <p> Length: ${length}</P>

    <p> Difficultly: ${difficulty}</p>

    <p>${likes} Likes </p>

    <button id="comment-button" class="comment-button" > Click here for comments </button>

    <button id="like-btn" class="like-btn">Like </button>
    <span>☀️</span>
    `;
  }
}
