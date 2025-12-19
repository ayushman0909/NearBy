import styles from "../../Css/Homepage/HowItWorks.module.css";


const CircularHowItWorksCard = ({ stepsData }) => {
  return (
    <>
      {stepsData.map((step) => {
        return (
          <div key={step.id}  className={`${styles.step} ${styles[step.classname]}`}>
            {step.id===1 ?  (<h3>Step-{step.id}(Seller)</h3>): 
            (step.id===2 ?   <h3>Step-{step.id} <br />(Step-{step.id-1} for Buyer)</h3>:(<h3>Step-{step.id}</h3>))
            }
            

            <h3>{step.icon} <br />{step.title}</h3>
            <p>{step.description}</p>
              
          </div>
        );
      })}

     
    </>
  );
};

export default CircularHowItWorksCard;
