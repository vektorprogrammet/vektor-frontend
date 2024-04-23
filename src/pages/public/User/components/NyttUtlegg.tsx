/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import {
  faCaretLeft,
  faCaretRight,
  faCheckToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import validateAccountNumber from "norwegian-utils/validateAccountNumber";

type Inputs = {
  amount: number;
  description: string;
  receipt: File;
  bankAccountNumber: string;
};

interface NyttUtleggProps {
  showConfirmation: boolean;
  setNew: () => void;
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

const NyttUtlegg = (props: NyttUtleggProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dateValue, setDateValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [file, setFile] = useState(new File([""], "filename"));
  const [currentErrorMessage, setCurrentErrorMessage] = useState("");

  const handleDateValueChange = (value: DateValueType) => {
    setDateValue(value);
  };

  const validateDate = (date: Date) => {
    return date > new Date("01/01/2024");
  };

  const { register, handleSubmit, formState } = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      amount: 0,
      description: "",
      receipt: new File([""], "filename"),
      bankAccountNumber: "0",
    },
  });

  // dirtyFields må brukes for at den skal oppdateres (minneoptimering react-hook-form)
  // console.assert(formState.dirtyFields || true);

  // "data" må legges til i onSubmit for å sende data til backend når den er klar. const onSubmit: SubmitHandler<Inputs> = (data) => {
  const onSubmit: SubmitHandler<Inputs> = () => {
    // const formData = { ...data, date: dateValue?.startDate };

    // send to backend here..
    // console.log("Form submitted with the following data:", formData);
  };

  const isCurrentInputValid = () => {
    const date = new Date(dateValue?.startDate?.toString() || "");
    switch (currentStep) {
      case 1:
        if (formState.errors.amount || !formState.dirtyFields.amount) {
          setCurrentErrorMessage("Beløp må være et positivt tall.");
          return false;
        }
        break;

      case 2:
        if (
          formState.errors.description
          || !formState.dirtyFields.description
        ) {
          setCurrentErrorMessage(
            "Beskrivelse må være lengre enn to bokstaver.",
          );
          return false;
        }
        break;

      case 3:
        if (!validateDate(date)) {
          setCurrentErrorMessage(
            "Utleggsdato må være en gyldig dato etter 1. januar 2024 (DD-MM-YYYY).",
          );
          return false;
        }
        break;

      case 4:
        if (
          formState.errors.receipt
          || file.name === "filename"
          || !file.type.includes("image")
        ) {
          setCurrentErrorMessage("Kvittering må være et opplastet bilde.");
          return false;
        }
        break;

      case 5:
        if (formState.errors.bankAccountNumber) {
          setCurrentErrorMessage(
            "Kontonummer må være et gyldig norsk kontonummer.",
          );
          return false;
        }
        break;

      default:
        break;
    }
    setCurrentErrorMessage("");
    return true;
  };

  const handleConfirm = () => {
    const { showConfirmation, setConfirmation, setNew } = props;
    setConfirmation(!showConfirmation);
    setNew();
  };

  const handleNext = () => {
    if (isCurrentInputValid()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep !== 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const Amount = (
    <input
      {...register("amount", { required: true, min: 1 })}
      type="number"
      id="amount"
      name="amount"
      placeholder="Beløp"
      className="input input-bordered input-secondary text-sm sm:text-base w-full"
    />
  );
  const Description = (
    <textarea
      {...register("description", { required: true, minLength: 2 })}
      id="description"
      name="description"
      placeholder="Beskrivelse"
      className="textarea textarea-secondary textarea-lg text-sm sm:text-base w-full max-w-xs max-h-20"
    />
  );
  const DateElement = (
    <Datepicker
      value={dateValue}
      displayFormat="DD-MM-YYYY"
      asSingle
      useRange={false}
      onChange={handleDateValueChange}
      inputClassName="border border-vektor-darblue rounded-md w-full px-3 py-2 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-vektor-darblue focus:border-vektor-darblue text-sm sm:text-base"
    />
  );
  const ReceiptUpload = (
    <input
      {...register("receipt", { required: true })}
      type="file"
      id="receipt"
      name="receipt"
      accept="image/*"
      multiple={false}
      onChange={(e) => setFile(e.target.files![0])}
      form="disbursementForm"
      className="file-input file-input-bordered file-input-md input-secondary w-full"
    />
  );
  const BankAccountNumber = (
    <input
      {...register("bankAccountNumber", {
        required: true,
        validate: validateAccountNumber,
      })}
      type="text"
      id="bankAccountNumber"
      name="bankAccountNumber"
      className="input input-bordered input-md input-secondary w-full"
      placeholder="Kontonummer"
    />
  );

  const inputWrapper = (label: string, input: JSX.Element) => (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text font-bold">{label}</span>
      </label>
      {input}
    </div>
  );

  const Next = (
    <button
      type="button"
      onClick={handleNext}
      className="btn btn-md hidden"
      disabled={currentStep === 6}
    >
      <span>Neste</span>
      <FontAwesomeIcon className="text-white pl-4" icon={faCaretRight} />
    </button>
  );

  const Confirm = (
    <button
      type="submit"
      onClick={handleConfirm}
      className="btn btn-success btn-md m-6"
      hidden={currentStep !== 6}
    >
      <span>Bekreft</span>
      <FontAwesomeIcon className="text-white pl-4" icon={faCheckToSlot} />
    </button>
  );

  const Back = (
    <button
      type="button"
      onClick={handlePrevious}
      className="btn btn-md"
      disabled={currentStep === 1}
    >
      <FontAwesomeIcon className="text-white pr-4" icon={faCaretLeft} />
      <span>Forrige</span>
    </button>
  );

  const stepToComponent = (step: number) => {
    switch (step) {
      case 1:
        return inputWrapper("Utleggsbeløp:", Amount);
      case 2:
        return inputWrapper("Utleggsbeskrivelse:", Description);
      case 3:
        return inputWrapper("Dato for utlegg:", DateElement);
      case 4:
        return inputWrapper("Bilde av kvittering:", ReceiptUpload);
      case 5:
        return inputWrapper("Utbetalingskonto:", BankAccountNumber);
      case 6:
        return (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-vektor-darblue text-2xl font-bold">
              Bekrefte utlegg?
            </h1>
            {Confirm}
          </div>
        );
      default:
        break;
    }
    return <div />;
  };

  return (
    <div className="leading-relaxed font-sans max-w-md mx-auto md:max-w-2xl flex flex-col justify-center items-center">
      <form
        id="disbursementForm"
        name="disbursementForm"
        className="bg-vektor-blue w-5/6 rounded-xl my-16 flex flex-col pt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="rounded-t-xl w-11/12 h-36 m-6 px-3 justify-center self-center">
          <img
            className="w-1/4 -mt-6 float-right hidden md:block"
            src="images/team/OkonomiTor.png"
            alt=""
          />
          {stepToComponent(currentStep)}
          <p className="text-red-600 text-sm my-4 m-1 w-full max-w-xs">
            {currentErrorMessage}
          </p>
        </div>
        <div className="flex justify-around space-x-6 py-5 bg-slate-800 rounded-b-xl">
          {Back}
          {Next}
        </div>
      </form>
    </div>
  );
};

export default NyttUtlegg;
