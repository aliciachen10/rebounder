import styles from '../styles/pages/Dashboard.module.css';

import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SimpleForm from '../components/chatbot/SimpleForm'

const Dashboard = () => {
  // const { user } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>Dashboard - Rebound Health</title>
      </Helmet>

      <div>
        <h2 className={styles.title}>Dashboard</h2>

        <p className={styles['welcome-text']}>
          Welcome.
          {/* Welcome, {user?.metadata?.firstName || 'stranger'}{' '} */}
          <span role="img" alt="hello">
            👋
          </span>
        </p>
        <p>Thanks for showing up! We'd love for you to interact with our coach. </p>
        <p>Questions or feedback? Please feel free to <u><a href="https://hellorebound.com/contact/">contact us.</a></u></p>
        <br/>
        <br/>
        <SimpleForm />

        {/* <p className={styles['info-text']}>
          Edit the <code>src/pages/Dashboard.js</code> file to populate this
          page.
        </p> */}
      </div>
    </>
  );
};

export default Dashboard;
