import metPopulator from '../frontend/updater.js';

const propDrag = {
  items: document.getElementsByTagName('li'),
  container: document.getElementsByTagName('ul')[0],
};

const metDrag = {

  dropOut(newIndex) {
    const dragged = document.getElementsByClassName('ontop')[0];
    const hovered = document.getElementsByClassName('onbottom')[0];
    const oldIndex = Array.prototype.indexOf.call(propDrag.container.children, dragged);
    const newDict = metPopulator.sortStorage();
    const draging = newDict.splice(oldIndex, 1);
    newDict.splice(newIndex, 0, draging[0]);
    localStorage.clear();
    for (let i = 0; i < newDict.length; i += 1) {
      const obj = { description: newDict[i][0], status: newDict[i][1], index: i };
      metPopulator.updateStorage(obj);
    }
    dragged.classList.remove('ontop');
    hovered.classList.remove('onbottom');
    metPopulator.updateDOM();
  },

  onBottom(e, item) {
    e.preventDefault();
    item.classList.add('onbottom');
  },
};

export default metDrag;