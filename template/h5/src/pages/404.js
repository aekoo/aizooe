import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import 'whatwg-fetch';
import styles from '../assets/css/NotFound.less';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      routes: [],
    };
  }

  componentDidMount() {
    console.log(this.props)
    // fetch('/__umiDev/routes')
    //   .then(res => res.json())
    //   .then(routes => {
    //     this.setState({
    //       loading: false,
    //       routes,
    //     });
    //   });
  }

  // renderRoutes(routes) {
  //   return (
  //     <ul className={styles.ul}>
  //       {routes.map((route, i) => {
  //         if (!route.path) return null;
  //         return (
  //           <li key={route.key || i}>
  //             <Link to={route.path}>{route.path}</Link>
  //             {route.routes ? this.renderRoutes(route.routes) : null}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }

  render() {
    const { location } = this.props;
    return (
      <div className={styles.wrapper}>
        <h1>cy development 404 page</h1>
        <p>
          There's not a page yet at <code>{location.pathname}</code>.
        </p>
        <p>
          Create a React.js component in your pages directory at{' '}
        </p>
        <h2>go to homePage</h2>
        <ul className={styles.ul}>
            <li>
              <Link to={'/'}>首页</Link>
            </li>
        </ul>

      </div>
    );
  }
}

export default withRouter(NotFound);
