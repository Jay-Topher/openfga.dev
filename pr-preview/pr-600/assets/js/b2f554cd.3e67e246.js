"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"fine-grained-news-2023-12","metadata":{"permalink":"/blog/fine-grained-news-2023-12","source":"@site/blog/fine-grained-news-2023-12.md","title":"Fine Grained News - December 2023","description":"Fine Grained News","date":"2023-12-18T00:00:00.000Z","formattedDate":"December 18, 2023","tags":[{"label":"newsletter","permalink":"/blog/tags/newsletter"}],"readingTime":3.31,"hasTruncateMarker":false,"authors":[{"name":"Andres Aguiar","title":"Product Manager","url":"https://github.com/aaguiarz","imageURL":"/img/blog/authors/andres.jpg","key":"aaguiar"}],"frontMatter":{"title":"Fine Grained News - December 2023","description":"Fine Grained News","slug":"fine-grained-news-2023-12","date":"2023-12-18T00:00:00.000Z","authors":"aaguiar","tags":["newsletter"],"image":"https://openfga.dev/img/openfga_logo.svg","hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Conditional Relationship Tuples for OpenFGA","permalink":"/blog/conditional-tuples-announcement"}},"content":"Hi Everyone!\\n\\nWe\'ve been publishing a monthly internal newsletter we called **Fine Grained News** since the beginning on 2023, and we just thought it would be a good idea to share it with the community. Yeah, we are slow thinkers!\\n\\nYou can expect to find here a summary of what we\'ve been up to, what we are planning to do, and some other random stuff we think you might find interesting.\\n\\n## Team News\\n\\nWe always start our Monthly Community Meetings presenting the team. If you attended the last one, you\'ve seen that the size of the team has grown quite a bit! We are pretty excited about the impact it will have in OpenFGA and the authorization space in general. \\n\\n## Behavior Driven Development with OpenFGA\\n\\nIn our last Community Meeting, the [Agicap](https://agicap.com/en) team (Pauline and Yann) demoed how they are using OpenFGA to implement Behavior Driven Development (BDD) in their authorization system.\\n\\nThe screenshot below might be enough to understand what they are doing, but if you want to know more, you can watch the full presentation [here](https://youtu.be/xXhwPPcGRqE?t=765).\\n\\n![bdd demo](/img/blog/fgn-2023-12-bdd.png)\\n\\n## GoDaddy & OpenFGA\\n\\nGoDaddy has been working with OpenFGA for a few months. They just published a document explaining why they picked OpenFGA, and how they used to address the authorization challenges they were facing.\\n\\nSome interesting tidbits:\\n\\n- They implemented their own DynamoDB Storage Adapter, as they were heavy Dynamo DB users and liked the eventual consistency model it provided.\\n- They needed [Contextual Tuples](https://docs.fga.dev/modeling/basics/contextual-time-based-authorization#use-contextual-tuples-for-context-related-checks) to fully support their use case.\\n\\nRead the full article [here](https://www.godaddy.com/engineering/2023/12/12/authorization-oauth-openfga/).\\n\\n## Canonical & OpenFGA\\n\\nCanonical has also been working with OpenFGA for a while, and it\'s adding OpenFGA to different layers in their stack. \\n\\n![OpenFGA at Canonical](/img/blog/fgn-2023-12-canonical.png)\\n\\nThey just announced that OpenFGA support is included [in LXD](https://discourse.ubuntu.com/t/lxd-5-20-has-been-released/40865) and [MicroCloud](https://www.gamingdeputy.com/canonical-unveils-microcloud-a-toolkit-for-rapid-cluster-deployment/).\\n\\nPretty soon, if you are using Ubuntu Pro, you will be using OpenFGA :).\\n\\n## OpenFGA v1.4!\\n\\nLast week we released OpenFGA v1.4! This release includes our support for Conditional Relationship Tuples, which helps implementing additional Attribute-Based Access Control scenarios like temporal access, IP based access, bank transfer limits, SaaS application plans, and much more!\\n\\nYou can read more about it [here](https://openfga.dev/docs/modeling/conditions).\\n\\n## SDK Improvements\\n\\n- The [Java SDK](https://github.com/openfga/java-sdk) has now feature parity with the rest of the our SDKs. It can be used from any language for the Java VM. You can see examples on Kotlin, Groovy and Scala [here](https://github.com/booniepepper/openfga-java-sdk-preview/tree/core/src/main). \\n\\n- The [Python SDK](https://github.com/openfga/python-sdk) was updated to support synchronous clients, support custom SSL certificates, and better performance in batch checks.\\n\\n## Language Improvements\\n\\nWe\'ve been working on the OpenFGA language with some long-due improvements. Soon, you\'ll be able to use parentheses to group expressions when defining relations:\\n\\n![DSL improvements](/img/blog/fgn-2023-12-language.png)\\n\\nThe syntax is still not supported in the FGA CLI, but we are pretty close. Daniel demoed it in our latest community meeting, you can see the full demo [here](https://youtu.be/xXhwPPcGRqE?t=1313).\\n\\n## VS Code Extension Improvements\\n\\nWe have also been improving tuple validation when writing `fga.yaml` files, and it\'s pretty cool! Works on Daniel\'s machine for now :).\\n\\n![Tuple Validation Demo](/img/blog/fgn-2023-12-validation.png)\\n\\nDaniel also demoed it in our latest community meeting, watch it [here](https://youtu.be/xXhwPPcGRqE?t=1598).\\n\\n## KubeCon EU 2024\\n\\nWe are getting ready for KubeCon Europe 2024, in Paris. We\'ll have a Project Kiosk, and we have submitted a few talks. We\'ll keep you posted!\\n\\n## OpenFGA Community \\n\\nWe have a very welcoming community, and we\'d love to have you there! You can join us in different ways:\\n\\n- Join our [community meetings](https://github.com/openfga/community/blob/main/community-meetings.md), the second Thursday of every month. All the recordings are [here].(https://www.youtube.com/@OpenFGA).\\n- Join our [Discord](https://discord.gg/8naAwJfWN6)\\n- Stay up to date by following us on [X](https://twitter.com/openfga).\\n- Ask questions, submit ideas, or just say hi in our [GitHub Discussions](https://github.com/orgs/openfga/discussions).\\n\\n## See you next month!\\n\\nWe\'ll keep publishing our Fine Grained News each month, after the OpenFGA community meeting. If you have any feedback, you want to share your OpenFGA story, or know about something that you think is worth mentioning, please let us know!"},{"id":"conditional-tuples-announcement","metadata":{"permalink":"/blog/conditional-tuples-announcement","source":"@site/blog/conditional-tuples-announcement.md","title":"Conditional Relationship Tuples for OpenFGA","description":"Conditional Relationship Tuples for OpenFGA","date":"2023-11-06T00:00:00.000Z","formattedDate":"November 6, 2023","tags":[{"label":"openfga","permalink":"/blog/tags/openfga"},{"label":"features","permalink":"/blog/tags/features"}],"readingTime":4.595,"hasTruncateMarker":false,"authors":[{"name":"Andres Aguiar","title":"Product Manager","url":"https://github.com/aaguiarz","imageURL":"/img/blog/authors/andres.jpg","key":"aaguiar"}],"frontMatter":{"title":"Conditional Relationship Tuples for OpenFGA","description":"Conditional Relationship Tuples for OpenFGA","slug":"conditional-tuples-announcement","date":"2023-11-06T00:00:00.000Z","authors":"aaguiar","tags":["openfga","features"],"image":"https://openfga.dev/img/openfga_logo.svg","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Fine Grained News - December 2023","permalink":"/blog/fine-grained-news-2023-12"},"nextItem":{"title":"Join the OpenFGA team at KubeCon NA 2023","permalink":"/blog/kubecon-na-2023"}},"content":"Relationship Tuples are the facts that the OpenFGA evaluates to determine whether a user is permitted to access a resource.\\n\\nThe way tuples are considered when making authorization decisions in OpenFGA is guided by an authorization model, which employs concepts from Relationship-Based Access Control (ReBAC) to establish authorization policies. For instance, you might declare that users are allowed to view a document if they have permission to view its parent folder.\\n\\nAlthough ReBAC offers a highly flexible method for structuring permissions, it encounters difficulties with defining permissions based on attributes that are not easily represented as relationships. Attributes such as \u201cparent folder,\u201d \u201cdepartment,\u201d \u201cregion,\u201d and \u201ccountry\u201d can be conceptualized as relationships between two entities. However, attributes like \u201cIP address,\u201d \u201ctime of day,\u201d \u201cteam size limit,\u201d or \u201cmaximum amount for a bank transfer\u201d cannot be easily handled.\\n\\nIn our ongoing efforts to expand OpenFGA\u2019s capacity for articulating a broader range of authorization policies, we are introducing **Conditional Relationship Tuples**. These allow for the specification of conditions under which a particular tuple is relevant when evaluating an authorization query.\\n\\nConsider the following example, where we utilize Conditional Tuples to grant access for a user over a specified time duration. We stipulate that a user may be granted either unconditional access or access constrained to a certain time period:\\n\\n```dsl.openfga\\nmodel\\n  schema 1.1\\n\\ntype user\\n\\ntype document\\n  relations\\n    define viewer: [user, user with non_expired_grant]\\n\\ncondition non_expired_grant(current_time: timestamp, grant_time: timestamp, grant_duration: duration) {\\n  current_time < grant_time + grant_duration\\n}\\n```\\n\\nIf we write the following tuples:\\n\\n| user | relation| object| condition | \\n|------|---------|-------|---|\\n| user:bob | viewer| document:1| |\\n| user:anne | viewer| document:1| `name` : `non_expired_grant`, `context` : \\\\{ `grant_time` : `2023-01-01T00:00:00Z`, `grant_duration` : `1h` \\\\} |\\n\\nYou\'ll get the following results for the [Check](https://openfga.dev/api/service#/Relationship%20Queries/Check) operations below:\\n\\n| user | relation| object| context | result |\\n|------|---------|-------|---|---|\\n| user:bob | viewer| document:1|  | `allowed` : `true` |\\n| user:anne | viewer| document:1| `current_time` : `2023-01-01T00:10:00Z` | `allowed` : `true` |\\n| user:anne | viewer| document:1| `current_time` : `2023-01-01T02:00:00Z` | `allowed` : `false` |\\n| user:anne | viewer| document:1 | | `error` : \\"failed to evaluate relationship condition \'non_expired_grant\': context is missing parameters \'[current_time]\' |\\n\\nYou\'ll get the following results for the [ListObjects](https://openfga.dev/api/service#/Relationship%20Queries/ListObjects) operations below:\\n\\n| user | relation| object| context | result |\\n|------|---------|-------|---|---|\\n| user:anne | viewer| document:1| `current_time` : `2023-01-01T00:10:00Z` |  `objects`: `[ \\"document:1\\"]` |\\n| user:anne | viewer| document:1| | `error`: \\"failed to evaluate relationship condition \'non_expired_grant\': tuple \'document:1#viewer@user:anne\' is missing context parameters \'[current_time]\' |\\n\\nNote that:\\n\\n- `user:bob` will always get `allowed:true` as we has assigned as as viewer unconditionally.\\n- `user:anne` will get `allowed:true` if the `current_time` is before the `grant_time` + `grant_duration` and `allowed:false` otherwise.\\n- If you don\'t provide the `current_time` in the context, the Check and ListObjects operations will fail.\\n\\n## Use Cases\\n\\nThe [OpenFGA Sample Stores repository](https://github.com/openfga/sample-stores) has several examples that take advantage of this new feature:\\n\\n- [Granting access during a specific period of time (the use case explained above)](https://github.com/openfga/sample-stores/tree/main/stores/temporal-access).\\n- [Allow access based on the user\u2019s IP Address](https://github.com/openfga/sample-stores/tree/main/stores/ip-based-access).\\n- [Granting access based on group membership and resource attributes](https://github.com/openfga/sample-stores/tree/main/stores/groups-resource-attributes).\\n- [Allow access to specific features based on usage](https://github.com/openfga/sample-stores/tree/main/stores/advanced-entitlements).\\n- [Determine if a user can make a bank transfer based .on the transaction amount](https://github.com/openfga/sample-stores/tree/main/stores/banking).\\n- [Data types and operations supported in conditions](https://github.com/openfga/sample-stores/tree/main/stores/condition-data-types).\\n\\n## How to use it?\\n\\nConditional Relationship Tuples are included in OpenFGA 1.4.0-rc1 version. You can run it by pulling it from docker:\\n\\n```shell\\ndocker pull openfga/openfga:v1.4.0-rc1\\ndocker run -p 8080:8080 -p 8081:8081 -p 3000:3000 openfga/openfga:v1.4.0-rc1 run`\\n```\\n\\nOpenFGA has a rich ecosystem of developer tools. The following have been updated to support Conditional Relationship Tuples:\\n\\n- [Visual Studio Code integration](https://marketplace.visualstudio.com/items?itemName=openfga.openfga-vscode) which provides syntax highlighting and model validations for conditions.\\n\\n- Beta versions of the [Javascript SDK](https://www.npmjs.com/package/@openfga/sdk/v/0.3.0-beta.1) and the [Go SDK](https://github.com/openfga/go-sdk/releases/tag/v0.3.0-beta.1), which allows using the additional parameters.\\n\\n- The [OpenFGA CLI](https://github.com/openfga/cli) allows validating models and runing tests that use conditional tuples. You can use it to test the new features by pointing to a `\u201c.fga.yaml\u201d` file that [defines the tests you want to run](https://github.com/openfga/cli#run-tests-on-an-authorization-model), without having to deploy OpenFGA.\\n\\n## What\u2019s Next?\\n\\nWe\u2019ll address some limitations of the current implementation:\\n\\n- The [Expand API](https://openfga.dev/api/service#/Relationship%20Queries/Expand) does not consider conditions.\\n- The Visual Studio Code integration is not validating the expressions in conditions. \\n- The Playground does not let you add context for tuples and assertions. You should use the VS Code Extension + the FGA CLI to test your models for now.\\n\\nWe\'ll also improve ListObjects scenarios when it\'s called with missing context.  For example, consider the following model that enables access only to documents with a specific status:\\n\\n```dsl.openfga\\nmodel\\n  schema 1.1\\n\\ntype user\\n\\ntype document\\n  relations\\n    define can_access: [user with docs_in_draft_status]\\n\\ncondition docs_in_draft_status(status: string) {\\n  status == \\"draft\\"\\n}\\n```\\n\\nIf you want to list all the documents a user can view, you\'ll need to know the status of all of those documents. Given you don\'t know the documents the user has access too, you can\'t send the status of those as a parameter to ListObjects.\\n\\nOur goal is to return a structure that you can use to filter documents on your side, similar to:\\n`(document.id = \u20181\u2019 and document.status = \u2018draft\u2019) or (document.id = \u20182\u2019 and.status = draft)` <br />\\nThis won\u2019t scale to a large number of documents, but would be useful in some scenarios.\\n\\n## Reach out!\\n\\nWe want to learn how you use this feature and how we can improve it! \\n\\nPlease reach out to us in [Discord](https://discord.gg/8naAwJfWN6) or [Github](https://github.com/orgs/openfga/discussions) with any questions or feedback."},{"id":"kubecon-na-2023","metadata":{"permalink":"/blog/kubecon-na-2023","source":"@site/blog/kubecon-na-2023.md","title":"Join the OpenFGA team at KubeCon NA 2023","description":"OpenFGA at KubeCon","date":"2023-10-12T00:00:00.000Z","formattedDate":"October 12, 2023","tags":[{"label":"conferences","permalink":"/blog/tags/conferences"},{"label":"kubecon","permalink":"/blog/tags/kubecon"}],"readingTime":0.885,"hasTruncateMarker":false,"authors":[{"name":"Andres Aguiar","title":"Product Manager","url":"https://github.com/aaguiarz","imageURL":"/img/blog/authors/andres.jpg","key":"aaguiar"}],"frontMatter":{"title":"Join the OpenFGA team at KubeCon NA 2023","description":"OpenFGA at KubeCon","slug":"kubecon-na-2023","date":"2023-10-12T00:00:00.000Z","authors":"aaguiar","tags":["conferences","kubecon"],"image":"https://openfga.dev/img/openfga_logo.svg","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Conditional Relationship Tuples for OpenFGA","permalink":"/blog/conditional-tuples-announcement"}},"content":"As you\'d expect, the OpenFGA team will be at KubeCon NA 2023 in Chicago, IL!\\n\\nWe\'ll have a packed agenda for the week:\\n\\n- [Jonathan Whitaker](https://www.linkedin.com/in/jonathan-whitaker-5a8b2484/) and [Lucas K\xe4ldstr\xf6m](https://www.linkedin.com/in/luxas/) will be presenting in [Could_Native Rejects](https://cloud-native.rejekts.io/) on how to use OpenFGA to manage and extend authorization in Kubernetes. Learn more [here](https://cfp.cloud-native.rejekts.io/cloud-native-rejekts-na-chicago-2023/speaker/XB7EUR/).\\n\\n- [Maria Ines Parnisari](https://www.linkedin.com/in/miparnisari/) and [Andres Aguiar](https://www.linkedin.com/in/aaguiar/) will be presenting in [AppDeveloperCon](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/co-located-events/appdevelopercon/) about modernizing authorization for cloud native applications using OpenFGA. Learn more [here](https://colocatedeventsna2023.sched.com/event/1Rj2j/modernizing-authorization-for-cloud-native-applications-using-openfga-andres-aguiar-maria-ines-parnisari-okta).\\n\\n- We\'ll host a Project Meeting on Monday 9.30 AM in the Hudson room at the [Hilton Garden Inn](https://maps.app.goo.gl/77FwgGdpsWK5jWHd6). We\'ll share how the product is being used, demo the latests features like our new CLI, the VS Code Extension, Conditional Relationships, the Java SDK... and more! \\n\\n- We\'ll be in the CNCF Project Pavilion during the afternoons.\\n\\n- We\'ll host our [OpenFGA community meeting](https://github.com/openfga/community/blob/main/community-meetings.md) directly from KubeCon on Thursday 9th  at 3PM UTC (8AM PST/11AM EST).\\n\\n\\nIf you want to meet with the team outside of these events, please pick any spot that works for you in our [calendar](https://calendar.app.google/GonEwLboKvPkG8pL6).\\n\\nSee you in Chicago!"}]}')}}]);