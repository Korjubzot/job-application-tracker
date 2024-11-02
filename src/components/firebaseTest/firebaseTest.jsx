// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import { getDatabase, ref, set, onValue } from "firebase/database";

function writeTestData() {
  const db = getDatabase();
  set(ref(db, "test/"), {
    message: "hello",
    number: 12345,
  });
}

function FirebaseTest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "test/");

    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const fetchedData = snapshot.val();
        console.log("TEST data fetched from Firebase:", fetchedData);
        setData(fetchedData);
      },
      {
        onlyOnce: true,
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <button onClick={writeTestData}>Update data</button>
      <p>{data?.message || "No data yet."}</p>
      <p>{data?.number || "No number yet."}</p>
    </div>
  );
}

export default FirebaseTest;
