const getProjects = () => {
  let ans;
  axios
    .get(
      "https://nodejs-tech-assignment.herokuapp.com/projects?user_id=5fb5d7d5e77b3749e751906c"
    )
    .then((res, req) => {
      ans = res.data;
    });
  axios
    .get(
      `https://nodejs-tech-assignment.herokuapp.com/elements?project_id=${ans.rootElement}`
    )
    .then((res, req) => {
      ans.rootElement = res.data;
    });
};

module.exports(getProjects);