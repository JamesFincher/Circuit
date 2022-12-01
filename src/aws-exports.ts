const awsmobile = {
  aws_project_region: "us-west-2",
  aws_cognito_identity_pool_id:
    "us-west-2:6132d02f-df56-4784-b965-57e337d81f99",
  aws_cognito_region: "us-west-2",
  aws_user_pools_id: "us-west-2_ThZoM6KHO",
  aws_user_pools_web_client_id: "24naa1boehoqh58ibib5cikhkj",
  oauth: {},
  aws_cognito_username_attributes: ["EMAIL", "PHONE_NUMBER"],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
  aws_user_files_s3_bucket: "circuit85eb876d15984ebda0f7a4f494b40f3e95421-dev",
  aws_user_files_s3_bucket_region: "us-west-2",
};

export default awsmobile;
