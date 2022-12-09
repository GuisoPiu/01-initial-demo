import { FC } from "react";
import Head from "next/head";
import { Navbar } from '../Navbar'

import styles from "../layouts/MainLayout.module.css";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            
          <Head>
            <title>Home Hector</title>
            <meta name="description" content="Home Page" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>

            { children }
    
          </main>
    
        </div>
      )
}
