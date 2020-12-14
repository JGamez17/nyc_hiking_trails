class Comment {
  static container = document.querySelector(".comment");

  constructor(comment) {
    this.comment = comment;
    this.renderComment();
  }

  renderComment() {
    const box = document.createElement("div");
    box.className = "box";
    box.dataset.id = this.comment.id;
    this.box = box;
    this.renderInnerHTML();

    this.constructor.container.append(box);
  }

  renderInnerHTML() {
    const { comment } = this.comment;
    this.box.innerHTML = `
      <p class="comment">Comment: ${comment}</p>
      `;
  }
}
