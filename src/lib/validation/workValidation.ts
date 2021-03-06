import * as BaseJoi from 'joi';
import * as JoiExtension from 'joi-date-extensions';

const Joi = BaseJoi.extend(JoiExtension);

const workHistoryByMonthValidation = (schema) => {
  const workHistoryByMonthSchema = {
    month: Joi.date().format('YYYY-MM').required(),
  };

  const validate = Joi.validate(schema, workHistoryByMonthSchema);
  return validate;
};

const workHistoryByDayValidation = (schema) => {
  const workHistoryByDayValidation = {
    month: Joi.date().format('YYYY-MM').required(),
    day: Joi.date().format('DD').required(),
  };

  const validate = Joi.validate(schema, workHistoryByDayValidation);
  return validate;
};

const workHistoryValidation = (schema) => {
  const workHistorySchema = {
    workType: Joi.string().required(),
  };

  const validate = Joi.validate(schema, workHistorySchema);
  return validate;
};

export {
  workHistoryByMonthValidation,
  workHistoryByDayValidation,
  workHistoryValidation,
};
