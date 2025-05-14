// import { type NextRequest, NextResponse } from 'next/server'
// import algoliasearch from 'algoliasearch'
// import { createClient } from '@sanity/client'
// import { groq } from 'next-sanity'

// // Initialize the Sanity client
// const sanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   perspective: 'published',
//   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // use current UTC date - see "specifying API version"!
//   useCdn: false,
// })

// export async function GET(req: NextRequest) {
//   try {
//     const response = await AlgoliaUpdate()
//     // console.log(response);

//     return NextResponse.json({
//       status: 200,
//       imported: true,
//       now: Date.now(),
//       response,
//     })
//   } catch (err: any) {
//     console.error(err)
//     return new Response(err.message, { status: 500 })
//   }
// }

// // export async function GET(req: NextRequest) {
// //   try {
// //     //const data = await req.json();

// //     // if (!data) {
// //     //   return new Response('Bad Request', { status: 400 })
// //     // }

// //     // const documentId = data.id
// //     const response = await AlgoliaUpdate();
// //     //const response = "Test"

// //     console.log(response);

// //     return NextResponse.json({
// //       status: 200,
// //       imported: true,
// //       now: Date.now(),
// //       response
// //     })
// //   } catch (err: any) {
// //     console.error(err)
// //     return new Response(err.message, { status: 500 })
// //   }
// // }

// async function AlgoliaUpdate(documentId: any = null) {
//   const documents = await sanityClient.fetch(QUERY)
//   // Initialize the Algolia client inside the function
//   const algoliaInstance = algoliasearch(
//     process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ?? '',
//     process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_UPDATE_API_KEY ?? '',
//   )
//   const index = algoliaInstance.initIndex('espira')
//   await index.clearObjects()

//   try {
//     console.time(`Saving ${documents.length} documents to index:`)
//     await index.saveObjects(documents)
//     console.timeEnd(`Saving ${documents.length} documents to index:`)
//     return { status: 'OK', count: documents.length }
//   } catch (error) {
//     console.error(error)
//     return { status: 'Fail (index-all)' }
//   }
// }

// // async function AlgoliaUpdate(documentId: any = null) {

// //   const documents = await sanityClient.fetch(QUERY);

// //   const index = algoliaInstance.initIndex('espira');
// //   index.clearObjects();

// //   try {
// //     console.time(`Saving ${documents.length} documents to index:`);
// //     await index.saveObjects(documents);
// //     console.timeEnd(`Saving ${documents.length} documents to index:`);
// //     return({ status: 'OK', count: documents.length });
// //   } catch (error) {
// //     console.error(error);
// //     return({ status: 'Fail (index-all)' });
// //   }

// // }

// const PROJECTION = groq`
//   {
//     // Bureaucracies
//     _type,
//     "objectID": _id,
//     _createdAt,
//     "uri": slug.current,
//     "parent_title": parent->title,
//     "parent_uri": parent->slug.current,
//     search_priority,

//     // Textual search
//     title,
//     "headings": elements[].titleBlock.title,
//     "element_body": pt::text(elements[].text),

//     _type == "article" => {
//       "description": excerpt,
//       excerpt == null => {
//         "description": pt::text(elements[0].text)
//       }
//     },

//     _type == "kindergarten" => {
//       "description": pt::text(description),
//       "street": street,
//       "region": region,
//       "postal_code": postal_code,
//       "phone": phone,
//       "openingHours": openingHours,
//     },

//     // Presentational content
//     mainImage != undefined => {
//       "mainImage": mainImage.asset->url + '?w=500',
//     },
//     mainImage == undefined => {
//       "mainImage": *[_type == "article" && string::startsWith(slug.current, ^.slug.current + "/" ) && mainImage.asset != undefined][0].mainImage.asset->url
//     },

//     _type == "search_add" => {
//       "line_intro": description,
//       "mainImage": image.asset->url + '?w=500',
//       "uri": link,
//       "headings": keywords,
//       "section": "Kosthold og helse"
//     },

//   }
// `

// const QUERY =
//   groq`
//   *[
//     _type in ['article', 'kindergarten', 'search_add']
//       && (defined(slug.current) || defined(link))
//       && (defined(excerpt) || defined(description) || defined(elements))
//       && hidden != true
//     ]
// ` + PROJECTION
