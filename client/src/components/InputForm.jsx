/* eslint-disable react/prop-types */
function InputForm({
  label,
  value,
  setValue,
  type,
  invalidFields,
  setInvalidFields,
}) {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type="text"
        
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 round-md w-full"
        value={value}
        onChange={(e) => {
          setValue((prev) => ({ ...prev, [type]: e.target.value }));
        }}
        onFocus={() => setInvalidFields([])}
        
      />

      {invalidFields &&
        invalidFields.length > 0 &&
        invalidFields.some((field) => field.name === type) && (
          <small className="text-red-500 italic">
            {invalidFields.find((field) => field.name === type)?.message}
          </small>
        )}
    </div>
  );
}

export default InputForm;
