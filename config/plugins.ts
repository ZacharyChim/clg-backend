// export default ({ env }) => ({
//   // ...
//   email: {
//     config: {
//       provider: "sendmail", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
//       settings: {
//         defaultFrom: "info@clgcpa.com",
//         defaultReplyTo: "info@clgcpa.com",
//         testAddress: "zecharyw@gmail.com",
//       },
//     },
//   },
//   // ...
// });
module.exports = ({ env }) => ({
	"vercel-deploy": {
		enabled: true,
		config: {
			deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_KFDgdUB0Y2HfYi90XnW2SMfZve3N/NJN1CFTL2g",
			apiToken: "zfjtikSuEEZStrzi2lvIyvX3",
			apiFilter: "clg-frontend",
			roles: ["strapi-super-admin"]
		},
	},
});
