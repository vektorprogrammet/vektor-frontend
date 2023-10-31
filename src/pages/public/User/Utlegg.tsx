/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import Datepicker from "react-tailwindcss-datepicker";

const Utlegg = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: React.SetStateAction<{ startDate: Date; endDate: Date; }>) => {
    setDateValue(newValue);
  };

  type Inputs = {
    amount: number
    description: string
    date: Date
    receipt: File
    bankAccountNumber: number
  };
  const { register, handleSubmit, formState } = useForm<Inputs>({
    defaultValues: {
      amount: undefined, description: "", receipt: undefined, bankAccountNumber: undefined,
    },
  });

  const handleNext = () => {
    if (!(currentStep === 5)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (!(currentStep === 1)) {
      setCurrentStep(currentStep - 1);
    }
  };

  const Amount = <input {...register("amount", { required: true })} id="amount" name="amount" type="number" placeholder="Beløp" className="input input-bordered input-secondary text-sm sm:text-base w-full" />;
  const Description = <textarea {...register("description", { required: true })} id="description" name="description" placeholder="Beskrivelse" className="textarea textarea-secondary textarea-lg text-sm sm:text-base w-full max-w-xs max-h-28" />;
  const DateElement = (
    <Datepicker
      value={dateValue}
      displayFormat="DD/MM/YYYY"
      asSingle
      useRange={false}
      onChange={handleValueChange}
      inputClassName="border border-vektor-darblue rounded-md w-full px-3 py-2 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-vektor-darblue focus:border-vektor-darblue text-sm sm:text-base"
    />
  );
  const ReceiptUpload = <input {...register("receipt", { required: true })} id="receipt" name="receipt" type="file" className="file-input file-input-bordered file-input-md input-secondary w-full" />;
  const BankAccountNumber = <input {...register("bankAccountNumber", { required: true })} id="bankAccount" name="bankAccount" className="input input-bordered input-md input-secondary w-full" placeholder="Kontonummer" />;

  const inputWrapper = (label: string, input: JSX.Element) => (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {input}
    </div>
  );

  const Next = currentStep === 5 ? <button type="submit" form="disbursementForm" className="btn btn-success btn-md"> Bekreft</button> : (
    <button type="button" onClick={handleNext} className="btn btn-md">
      <span>Neste</span>
      <FontAwesomeIcon className="text-white pl-4" icon={faCaretRight} />
    </button>
  );
  const Back = (
    <button type="button" onClick={handleBack} className="btn btn-md" disabled={currentStep === 1}>
      <FontAwesomeIcon className="text-white pr-4" icon={faCaretLeft} />
      <span>Forrige</span>
    </button>
  );

  // function handleSubmit(event: FormEvent<HTMLFormElement>): void
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = { ...data, date: dateValue.startDate };
    // send to backend here..
    console.log(formData);
  };

  const stepToComponent = (step: number) => {
    switch (step) {
      case 1:
        return inputWrapper("Utleggsbeløp:", Amount);
      case 2:
        return inputWrapper("Beskriv utlegget:", Description);
      case 3:
        return inputWrapper("Dato for utlegg:", DateElement);
      case 4:
        return inputWrapper("Bilde av kvittering:", ReceiptUpload);
      case 5:
        return inputWrapper("Utbetalingskonto:", BankAccountNumber);
      default:
        return inputWrapper("Utleggsbeløp:", Amount);
    }
  };

  return (
    <div className="leading-relaxed font-sans max-w-md mx-auto md:max-w-2xl flex flex-col justify-center items-center">
      <h1 className="font-sans max-w-2xl mt-10 text-vektor-darblue text-4xl text-center font-bold mx-3">
        Utlegg
      </h1>

      <div className="bg-vektor-blue w-5/6 rounded-xl my-16 flex flex-col pt-8">
        <form id="disbursementForm" className="rounded-t-xl w-11/12 h-36 m-6 px-3 justify-center self-center" onSubmit={handleSubmit(onSubmit)}>
          {stepToComponent(currentStep)}
        </form>
        <div className="flex justify-around space-x-6 py-5 bg-slate-800 rounded-b-xl">
          {Back}
          {Next}
        </div>
      </div>
    </div>
  );
};

export default Utlegg;
