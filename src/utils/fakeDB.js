// use local storage to manage cart data
const addToDb = id => {
    let jobID = {}

    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('job-id')
    if (storedJob) {
      jobID = JSON.parse(storedJob)
    }
  
    // add quantity
    const quantity = jobID[id]
    if (quantity) {
      const newQuantity = quantity +1
      jobID[id] = newQuantity
    } else {
      jobID[id] = 1
    }
    localStorage.setItem('job-id', JSON.stringify(jobID)) 
}
    
    const getStoredJob = () => {
        let jobID = {}
      
        //get the shopping cart from local storage
        const storedJob = localStorage.getItem('job-id')
        if (storedJob) {
          jobID = JSON.parse(storedJob)
        }
        return jobID;
      }

  export { addToDb, getStoredJob}