class TrailComponent {
  static container = document.querySelector(".trails");
  static buttonContainer = document.getElementById("buttons");

  constructor(trailInfo) {
    this.trailInfo = trailInfo;
    // debugger;
    this.renderTrail();
    this.buttonEventListener();
  }

  static sortTrails() {
    const boroughId = document.querySelector("#boroughId").value;
    // debugger;
    const url = "http://localhost:3000/boroughs/" + `${boroughId}` + "/trails";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.container.innerHTML = "";
        const sortedData = data.sort((a, b) => {
          if (a.likes > b.likes) {
            return -1;
          } else if (a.likes < b.likes) {
            return 1;
          }
          return 0;
        });
        sortedData.forEach((data) => new TrailComponent(data));
      });
  }

  buttonEventListener() {
    this.trail.addEventListener("click", this.handleOnClick);
  }

  handleOnClick = (event) => {
    if (event.target.className == "comment-button") {
      const commentInfo = document.getElementById("comments");
      commentInfo.innerHTML = "";
      const trailId = this.trailInfo.id;
      api.retrieveComments(trailId);
      const trailInfo = document.getElementById("trails");
      // trailInfo.innerHTML = "";
    }
    if (event.target.className == "like-btn") {
      const trailId = this.trailInfo.id;

      api.updateLikes(trailId).then((trail) => this.updateLikesHTML(trail));
    }
  };

  updateLikesHTML = (trail) => {
    //debugger;
    // want to get the data-id 17
    // once inside get the trail-id ptag
    // update likes

    const trails = document.querySelector(".trails");
    const data = trails.querySelectorAll(".trails-info");
    data.forEach((trailInfo) => {
      if (trailInfo.dataset.id === trail.id.toString()) {
        const pTag = trailInfo.querySelector("#trail-id");
        pTag.innerHTML = `${trail.likes}` + " Likes ";
      }
    });
  };

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
      borough_id,
    } = this.trailInfo;
    this.trail.innerHTML = `
    <h3> Name: ${name}</h3>

    <p> Location: ${location}</p>

    <p> Park Name: ${park_name}</p>

    <p> Length: ${length}</P>

    <p> Difficultly: ${difficulty}</p>

    <p id="trail-id"> ${likes || 0} Likes </p>

    <input type="hidden" value="${borough_id}" id="boroughId">

    <button id="comment-button" class="comment-button" > Click here for comments </button>

    <div class="comments"> </div> 

    <button id="like-btn" class="like-btn">Like </button>
    <span>☀️</span>
    `;
  }
}

// add a button to the index.html called (sort by popularity).
//  This button should sort the trail elements currently on the DOM so that the trails display from most liked to least liked. This task will also require you to think about how you can select info from the DOM and re-append it.

// user selects a borough, displays unsorted trails, once loaded a user pushes sort button
// sort from most popular to least popular
// then render to page
