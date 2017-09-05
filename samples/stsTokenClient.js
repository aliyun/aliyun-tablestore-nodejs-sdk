/*
1、使用阿里云STS SDK生成accessKeyId、secretAccessKey、stsToken，sdk地址：https://help.aliyun.com/document_detail/28786.html
2、授权的详细过程请参考:https://help.aliyun.com/document_detail/27364.html
3、生成后的示例结果如下
*/

var stsTokenClient = new TableStore.Client({
  accessKeyId: 'STS.G1rT1R8UKu1XRL3BNDxe6mfkd',
  secretAccessKey: '4tJRTBXoaSY797sPJwzakVWsHrzxb1H754eKnPVzBc2H',
  stsToken: 'CAISnwJ1q6Ft5B2yfSjIpvLHH4vm1YpqwvOzUGqCpk4RdOoagqPAhjz2IHtKeHhhAeAfsf40nW5V6vsSlqB6T55OSAmcNZIoaHnsHo7iMeT7oMWQweEumv/MQBqOaXPS2MvVfJ/aLrf0ceusbFbpjzJ6xaCAGxypQ12iN+/S6/tgcs9FdACkZjppCcsURG5ltNRIGXbKPuysOBOo4ArXEFE6lQdgywEe7rikkOmd8Qac9iqYrNUYvIPsOJOpQtBxNZNkKbeP0fdxa7DK3Vw7iXEI1t8v1vQUpm+b7oHMXgMPu0rZCYeOrI0zdj0eT7MhBqtJoML7kfBFoeHJn+z1sU0WY70EAnyPHd/6m5KaRb/0ZsxWbqrgJ3nWzsBa8CFRI4LeCxqAAVrEjVoVtBxkF/kmhNeGFkgzbq6hLBmstxMcUcqLC0pjR1wiL95dvbUI+umLSooomhx9KyWQEzK5h1BZVAbrSMbgdJEUI0l9XTdWARydIwViMLZ0G7vzddiFGsyFcE3yr5OODg5IXWHp+elMT68mpRkXdv7QB3y3YPOca+Z4Ih+I',
  endpoint: ' <your endpoint>',
  instancename: '<your instance name>'
});

