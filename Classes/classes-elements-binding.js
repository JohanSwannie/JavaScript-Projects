const listing = document.getElementById("list");

class ElementsBinding {
  constructor(_tag, _listDescr = []) {
    this.listTag = _tag;
    this.listDescr = _listDescr;
  }

  static createTag(description) {
    const liTag = document.createElement('li');
    liTag.textContent = description;
    liTag.style.color = '#FFF';
    return liTag;
  }

  removeInitialTags() {
    while (this.listTag.firstChild) {
      this.listTag.removeChild(this.listTag.firstChild);
    }
  }

  updateTags() {
    while (this.listTag.firstChild) {
      this.listTag.removeChild(this.listTag.firstChild);
    }

    for (let description of this.listDescr) {
      this.listTag.appendChild(ElementsBinding.createTag(description));
    }
  }

  addTags(addTextContent) {
    const IDX1 = this.listDescr.indexOf(addTextContent);
    if (IDX1 === -1) {
      this.listDescr.push(addTextContent);
      this.updateTags();
    }
  }

  removeTags(removeTextContent) {
    const IDX2 = this.listDescr.indexOf(removeTextContent);
    if (IDX2 > -1) {
      this.listDescr.splice(IDX2, 1);
      this.updateTags();
    }
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

const addInputValue = document.getElementById('addValue');

function addItem() {
  extraTagBinding.addTags(addInputValue.value);
  addInputValue.value = '';
}

const removeInputValue = document.getElementById('removeValue');

function removeItem() {
  extraTagBinding.removeTags(removeInputValue.value);
  removeInputValue.value = '';
}
