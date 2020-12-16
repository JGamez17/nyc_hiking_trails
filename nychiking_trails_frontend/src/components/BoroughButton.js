class BoroughButton {
  static container = document.getElementById("buttons");

  constructor(boroughs) {
    this.boroughs = boroughs;
    this.render();
    this.attachEventListener();
  }

  static retrieveBoroughs() {
    api
      .retrieveBoroughs()
      .then((data) => data.forEach((borough) => new BoroughButton(borough)));
  }

  attachEventListener() {
    this.bttn.addEventListener("click", this.handleOnClick);
  }

  handleOnClick = (event) => {
    if (event.target.className == "bttns") {
      const trailInfo = document.getElementById("trails");
      trailInfo.innerHTML = "";
      const id = this.bttn.dataset.id;
      api.retrieveTrails(id);
    }
  };

  // buttonEventListener() {
  //   this.bttn.addEventListener("click", this.handleOnClick);
  // };

  // handleOnClick = (event) => {
  //   if (event.target.className == "comment-button") {
  //     const trailId = this.trailInfo.id
  //     console.log(trailId)
  //   };
  // }

  render = () => {
    const bttn = document.createElement("div");
    bttn.className = "borough-bttn";
    bttn.dataset.id = this.boroughs.id;
    this.bttn = bttn;
    this.renderInnerHTML();
    this.constructor.container.append(bttn);
  };

  renderInnerHTML() {
    const { name } = this.boroughs;
    this.bttn.innerHTML = `
      <button class="bttns"> ${name} </button>
    `;
  }
}
