/**
 * Layout component
 * @param {*} children 
 * @returns 
 */
const Layout = ({ children }) => {
  return (
    <div>
      <div></div>
      <div>{children}</div>
      <div></div>
    </div>
  );
};

export default Layout;