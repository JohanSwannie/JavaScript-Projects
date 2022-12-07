const listing = document.getElementById("list");

class ElementsBinding {
  constructor(_tag, _listDescr = []) {
    this.listTag = _tag;
    this.listDescr = _listDescr;
  }

  static createTag(description) {
    const liTag = document.createElement('li');
    liTag.textContent = description;
    return liTag;
  }

  removeInitialTags() {
    while (this.listTag.firstChild) {
      this.listTag.removeChild(this.listTag.firstChild);
    }
  }

  updateTags() {
    for (let description of this.listDescr) {
      this.listTag.appendChild(ElementsBinding.createTag(description));
    }
  }

  addTags(textContent) {
    this.listDescr.push(textContent);
    this.updateTags();
  }

  removeTags(idx) {
    alert(`Tag to be removed is ${this.listDescr[idx]}`)
    this.listDescr.splice(idx, 1);
  }

}

const nameArray = ['Julian', 'Peter', 'Paul', 'Barry', 'Luke', 'Andrew',
                'Dominique', 'Louise', 'Matthew', 'Brendan', 'Graham',
                'Mary', 'Rosanne', 'Noel', 'Don', 'James', 'Jason',
                'Dianne', 'Pollos', 'Carl', 'Nancy', 'Oswald', 'Oscar',
                'Andreas', 'Dalene', 'Suzanne', 'Roy', 'Mike', 'Libby'];

const initialTagBinding = new ElementsBinding(listing, undefined);

initialTagBinding.removeInitialTags();

const extraTagBinding = new ElementsBinding(listing, nameArray);

extraTagBinding.addTags();

extraTagBinding.removeTags(Math.floor(Math.random() * nameArray.length) + 1);
