let noteList=[
  // {
  //   item: 'Buy Milk',
  //   dueDate: '4/10/2023'
  // },
  // {
  //   item: 'Go to College',
  //   dueDate: '4/10/2023'
  // }
];

// displayItems();


// Initialize the noteList from localStorage or as an empty array
function initializeNotes() {
  let storedNotes = localStorage.getItem('Value');
  if (storedNotes) {
      noteList = JSON.parse(storedNotes);
  } else {
      noteList = [];
  }
  displayItems(); // Update the UI with the stored notes
}

function addNote()
{
  let inputElement=document.querySelector('#note-input');
  let dateElement=document.querySelector('#note-date');
  let noteItem=inputElement.value;
  let noteDate=dateElement.value;
  if (noteItem && noteDate) {
    noteList.push({ item: noteItem, dueDate: noteDate });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
  } else {
    alert('Please fill out both fields.');
  }

}

function displayItems()
{
    let containerElement=document.querySelector('.note-container');
    let newHtml='';
    for(let i=0;i<noteList.length;i++)
    {
      let{item,dueDate}=noteList[i];
      newHtml+=`
      
        <span> ${item} </span>
        <span> ${dueDate} </span>
        <button class='btn-delete'  onclick="noteList.splice(${i},1); displayItems();"> Delete </button>
      
      `;
      
    }
    containerElement.innerHTML=newHtml;
    localStorage.setItem('Value', JSON.stringify(noteList));
}

// Call initializeNotes when the page loads
window.onload = initializeNotes;