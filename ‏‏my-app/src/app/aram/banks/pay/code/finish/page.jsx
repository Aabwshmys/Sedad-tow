"use client"

import { Suspense } from 'react';
import styles from './finish.module.css';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Finish = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FinishContent />
    </Suspense>
  );
}

const FinishContent = () => {
  const [showPage, setShowPage] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const datas = searchParams.get("names");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(false);
      router.push(`/aram/banks/pay/code/codeto?names=${datas}`);
    }, 7000);

    return () => clearTimeout(timer);
  }, [datas, router]);

  return (
    <div className={styles.continer}>
      <div className={styles.loader}></div>
      {showPage && <p>سيتم تحويلك الى الصفحة التالية في غضون 7 ثواني</p>}
    </div>
  );
}

export default Finish;
