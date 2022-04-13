const srcData = [
    {
     "name": "Senior Officer Trade Back Office",
     "url": "https://www.blockworks.com/senior-officer-trade-back-office-1061445-jv/?source=searchResults&searchType=1&placement=1&sortBy=date"
    },
    {
     "name": "Junior Officer Trade Back Office",
     "url": "https://www.blockworks.com/junior-officer-trade-back-office-1061443-jv/?source=searchResults&searchType=1&placement=2&sortBy=date"
    },
    {
     "name": "5 Machine Learning",
     "url": "https://www.blockworks.com/5-machine-learning-1061442-jv/?source=searchResults&searchType=1&placement=3&sortBy=date"
    },
    {
     "name": "3 Ruby Developers",
     "url": "https://www.blockworks.com/3-ruby-developers-1061441-jv/?source=searchResults&searchType=1&placement=4&sortBy=date"
    },
    {
     "name": "Sales Staff (Losgistic - Salary Attractive)",
     "url": "https://www.blockworks.com/sales-staff-losgistic-salary-attractive-1061440-jv/?source=searchResults&searchType=1&placement=5&sortBy=date"
    },
    {
     "name": "5 Front-End Developers",
     "url": "https://www.blockworks.com/5-front-end-developers-2-1061439-jv/?source=searchResults&searchType=1&placement=6&sortBy=date"
    }
  ]
  document.getElementById('searchfield').addEventListener('keyup', function(){
    let pattern = new RegExp(this.value, 'i');
    let resultSet = srcData.filter(item => item.name.match(pattern) && this.value != '').map(item => `<a href="${item.url}">${item.name}</a>`).join(', ');
    document.getElementById('searchresult').innerHTML = resultSet;
  });