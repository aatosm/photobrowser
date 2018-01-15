const style = {
  divStyle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(125px, 1fr)',
    gridGap: '50px',
    marginBottom: '80px'
  },
  photo: {
    margin: '50px 0px 30px 20px'
  },
  photoTitle: {
    marginBottom: '50px'
  },
  dropdown: {
    marginTop: '30px',
    marginBottom: '30px'
  },
  header: {
    float: 'right'
  },
  background: {
    // Original url for the used background photo:
    // http://globalmedicalco.com/photos/globalmedicalco/27/133373.jpg
    backgroundImage: 'url(https://i.imgur.com/pXofEso.jpg)',
    border: '3px solid black',
    borderRadius: '5px'
  },
  backBtn: {
    margin: '10px 0px 100px 20px'
  },
  loading: {
    marginBottom: '950px'
  }
}

module.exports = style;
