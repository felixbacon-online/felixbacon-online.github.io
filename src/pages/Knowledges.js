// import React from 'react';
// import Experience from '../components/knowledges/Experience';
// import Hobbies from '../components/knowledges/Hobbies';
// import Languages from '../components/knowledges/Languages';
// import OtherSkills from '../components/knowledges/OtherSkills';

// import Navigation from '../components/Navigation';

// const Knowledges = () => {
//   return (
//     <div className='knowledges'>
//       <Navigation/>
//       <section className="knowledgesContent">
//         <Languages/>
//         <Experience/>
//         <OtherSkills/>
//         <Hobbies/>
//       </section>
//     </div>
//   );
// };

// export default Knowledges;

import React from "react";
import Experience from "../components/knowledges/Experience";
import Hobbies from "../components/knowledges/Hobbies";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";

import Navigation from "../components/Navigation";
//import { Helmet } from "react-helmet-async";

const Knowledges = () => {
  return (
    <div className="knowledges">
      {/* <Helmet>
        <title>Félix Bacon - Compétences</title>
        <meta
          name="description"
          content="LANGUAGES INFORMATIQUE - FRAMEWORKS & BIBLIOTHÈQUES - EXPÉRIENCE - AUTRES COMPÉTENCES - INTÉRÊTS & LOISIRS"
        />
        <link rel="canonical" href="/competences" />
      </Helmet> */}
      <Navigation />
      <section className="knowledgesContent">
        {/* <h1 class="non-visible">page des comptétences multiples de Félix Bacon</h1> */}
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </section>
    </div>
  );
};

export default Knowledges;
