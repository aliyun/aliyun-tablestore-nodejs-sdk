var TableStore = require('../index');

var client = new TableStore.Client({
  accessKeyId: process.env.OTS_AK_ID || '<your-access-key-id>',
  secretAccessKey: process.env.OTS_AK_SECRET || '<your-access-key-secret>',
  endpoint: process.env.OTS_ENDPOINT || 'https://<your-instance>.ots.aliyuncs.com',
  instancename: process.env.OTS_INSTANCE || '<your-instance-name>'
});

var knowledgeBaseName = 'nodejs_sdk_e2e_test_' + Date.now();
var passed = 0;
var failed = 0;
var errors = [];

async function test(name, fn) {
  try {
    await fn();
    passed++;
    console.log('  PASS: ' + name);
  } catch (e) {
    failed++;
    errors.push({ name: name, error: e });
    console.log('  FAIL: ' + name + ' - ' + (e.message || e.code || JSON.stringify(e)));
  }
}

async function cleanup() {
  console.log('\n--- Cleanup ---');
  try {
    await client.deleteKnowledgeBase({ knowledgeBaseName: knowledgeBaseName });
    console.log('  Deleted knowledge base: ' + knowledgeBaseName);
  } catch (e) {
    console.log('  Cleanup warning (delete KB): ' + (e.message || e.code || JSON.stringify(e)));
  }
}

async function run() {
  console.log('E2E Knowledge Base Tests');
  console.log('Instance: rag-ots-test');
  console.log('Knowledge Base Name: ' + knowledgeBaseName);
  console.log('');

  // Test 1: CreateKnowledgeBase
  console.log('--- CreateKnowledgeBase ---');
  await test('createKnowledgeBase', async function () {
    var result = await client.createKnowledgeBase({
      knowledgeBaseName: knowledgeBaseName
    });
    console.log('    Response:', JSON.stringify(result, null, 2));
    if (!result.RequestId) throw new Error('Missing RequestId');
  });

  // Test 2: DescribeKnowledgeBase
  console.log('--- DescribeKnowledgeBase ---');
  await test('describeKnowledgeBase', async function () {
    var result = await client.describeKnowledgeBase({
      knowledgeBaseName: knowledgeBaseName
    });
    console.log('    Response:', JSON.stringify(result, null, 2));
    if (!result.RequestId) throw new Error('Missing RequestId');
  });

  // Test 3: ListKnowledgeBase
  console.log('--- ListKnowledgeBase ---');
  await test('listKnowledgeBase', async function () {
    var result = await client.listKnowledgeBase({});
    console.log('    Response:', JSON.stringify(result, null, 2));
    if (!result.RequestId) throw new Error('Missing RequestId');
  });

  // Test 4: DeleteKnowledgeBase
  console.log('--- DeleteKnowledgeBase ---');
  await test('deleteKnowledgeBase', async function () {
    var result = await client.deleteKnowledgeBase({
      knowledgeBaseName: knowledgeBaseName
    });
    console.log('    Response:', JSON.stringify(result, null, 2));
    if (!result.RequestId) throw new Error('Missing RequestId');
  });

  // Summary
  console.log('\n--- Results ---');
  console.log('Passed: ' + passed + ', Failed: ' + failed);
  if (errors.length > 0) {
    console.log('\nFailed tests:');
    errors.forEach(function (e) {
      console.log('  ' + e.name + ': ' + (e.error.message || e.error.code));
    });
  }

  // If deleteKnowledgeBase failed, try cleanup again
  if (failed > 0) {
    await cleanup();
  }
}

run().catch(function (e) {
  console.error('Unexpected error:', e);
  cleanup().then(function () {
    process.exit(1);
  });
});
