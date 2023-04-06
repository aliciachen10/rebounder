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
        <h2 className={styles.title}>Meet Rebound</h2>

        <p className={styles['welcome-text']}>
          {/* Welcome, {user?.metadata?.firstName || 'stranger'}{' '} */}
          {/* <span role="img" alt="hello">
            👋
          </span> */}
        </p>
        <p>Rebound helps you heal from trauma safely and on your own terms. We take the leading evidence-based methods and make them accessible and easy to use. If you've experienced trauma, chat with our Bot to learn techniques clinically shown to heal symptoms and help you live your happiest life.</p>
        <p>Questions or feedback? Please feel free to <u><a href="https://hellorebound.com/contact/">contact us.</a></u></p>

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
