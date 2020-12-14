class TrailComponent {
  static container = document.querySelector(".trails");
  static buttonContainer = document.getElementById("buttons");

  constructor(trailInfo, id) {
    this.name = trailInfo.name;
    this.location = trailInfo.location;
    this.park_name = trailInfo.park_name;
    this.length = trailInfo.length;
    this.difficulty = trailInfo.difficulty;
    this.id = id;
    this.renderTrail();
  }

  static getButtonClick() {
    // const buttonContainer = document.getElementById("buttons");
    // buttonContainer.addEventListener("click", () => {
    // console.log(event.target.dataset.id);
    const id = event.target.dataset.id;
    const trailId = this.id;
    api.retrieveComments(trailId, id);
    // });
  }

  renderTrail() {
    const div = document.createElement("div");
    div.className = "trails";
    div.innerHTML = this.renderInnerHtml();
    this.div = div;
    this.constructor.container.append(div);
  }

  renderInnerHtml() {
    return `
      <h3> Name: ${this.name}</h3>

      <p> Location: ${this.location}</p>

      <p> Park Name: ${this.park_name}</p>

      <p> Length: ${this.length}</P>

      <p> Difficultly: ${this.difficulty}</p>

    `;
  }
}
