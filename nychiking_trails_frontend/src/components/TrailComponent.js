class TrailComponent {
  static container = document.querySelector(".trails");
  static buttonContainer = document.getElementById("buttons");

  constructor(trailInfo) {
    this.name = trailInfo.name;
    this.location = trailInfo.location;
    this.park_name = trailInfo.park_name;
    this.length = trailInfo.length;
    this.difficulty = trailInfo.difficulty;
    this.id = trailInfo.id;
    this.renderTrail();
  }

  getButtonClick() {
    const trailId = this.id;
    api.retrieveComments(trailId);
  }

  renderTrail() {
    const div = document.createElement("div");
    div.className = "trails";
    div.innerHTML = this.renderInnerHtml();
    this.div = div;
    this.attachEventListener();
    this.constructor.container.append(div);
  }

  attachEventListener = () => {
    this.div.addEventListener("click", () => this.handleOnClick());
  };

  handleOnClick() {
    console.log("click");
    api.retrieveComments(this.id);
  }

  renderInnerHtml() {
    return `
      <h3> Name: ${this.name}</h3>

      <p> Location: ${this.location}</p>

      <p> Park Name: ${this.park_name}</p>

      <p> Length: ${this.length}</P>

      <p> Difficultly: ${this.difficulty}</p>

      <button class="comments"> Trail Comments </button>
    `;
  }
}
