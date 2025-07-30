
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Imagem
 * 
 */
export type Imagem = $Result.DefaultSelection<Prisma.$ImagemPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model Curtida
 * 
 */
export type Curtida = $Result.DefaultSelection<Prisma.$CurtidaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagem`: Exposes CRUD operations for the **Imagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imagems
    * const imagems = await prisma.imagem.findMany()
    * ```
    */
  get imagem(): Prisma.ImagemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curtida`: Exposes CRUD operations for the **Curtida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curtidas
    * const curtidas = await prisma.curtida.findMany()
    * ```
    */
  get curtida(): Prisma.CurtidaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Posts: 'Posts',
    Imagem: 'Imagem',
    Comentario: 'Comentario',
    Curtida: 'Curtida'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "posts" | "imagem" | "comentario" | "curtida"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Imagem: {
        payload: Prisma.$ImagemPayload<ExtArgs>
        fields: Prisma.ImagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          findFirst: {
            args: Prisma.ImagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          findMany: {
            args: Prisma.ImagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>[]
          }
          create: {
            args: Prisma.ImagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          createMany: {
            args: Prisma.ImagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>[]
          }
          delete: {
            args: Prisma.ImagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          update: {
            args: Prisma.ImagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          deleteMany: {
            args: Prisma.ImagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>[]
          }
          upsert: {
            args: Prisma.ImagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          aggregate: {
            args: Prisma.ImagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagem>
          }
          groupBy: {
            args: Prisma.ImagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagemCountArgs<ExtArgs>
            result: $Utils.Optional<ImagemCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComentarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      Curtida: {
        payload: Prisma.$CurtidaPayload<ExtArgs>
        fields: Prisma.CurtidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurtidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurtidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          findFirst: {
            args: Prisma.CurtidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurtidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          findMany: {
            args: Prisma.CurtidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>[]
          }
          create: {
            args: Prisma.CurtidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          createMany: {
            args: Prisma.CurtidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurtidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>[]
          }
          delete: {
            args: Prisma.CurtidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          update: {
            args: Prisma.CurtidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          deleteMany: {
            args: Prisma.CurtidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurtidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurtidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>[]
          }
          upsert: {
            args: Prisma.CurtidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          aggregate: {
            args: Prisma.CurtidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurtida>
          }
          groupBy: {
            args: Prisma.CurtidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurtidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurtidaCountArgs<ExtArgs>
            result: $Utils.Optional<CurtidaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    posts?: PostsOmit
    imagem?: ImagemOmit
    comentario?: ComentarioOmit
    curtida?: CurtidaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    posts: number
    comentarios: number
    curtidas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UsuarioCountOutputTypeCountPostsArgs
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs
    curtidas?: boolean | UsuarioCountOutputTypeCountCurtidasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    comentarios: number
    curtidas: number
    imagens: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | PostsCountOutputTypeCountComentariosArgs
    curtidas?: boolean | PostsCountOutputTypeCountCurtidasArgs
    imagens?: boolean | PostsCountOutputTypeCountImagensArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountImagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagemWhereInput
  }


  /**
   * Count Type ComentarioCountOutputType
   */

  export type ComentarioCountOutputType = {
    respostas: number
  }

  export type ComentarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | ComentarioCountOutputTypeCountRespostasArgs
  }

  // Custom InputTypes
  /**
   * ComentarioCountOutputType without action
   */
  export type ComentarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioCountOutputType
     */
    select?: ComentarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComentarioCountOutputType without action
   */
  export type ComentarioCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nomeUsuario: string | null
    email: string | null
    senhaHash: string | null
    biografia: string | null
    urlFotoPerfil: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nomeUsuario: string | null
    email: string | null
    senhaHash: string | null
    biografia: string | null
    urlFotoPerfil: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nomeUsuario: number
    email: number
    senhaHash: number
    biografia: number
    urlFotoPerfil: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nomeUsuario?: true
    email?: true
    senhaHash?: true
    biografia?: true
    urlFotoPerfil?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nomeUsuario?: true
    email?: true
    senhaHash?: true
    biografia?: true
    urlFotoPerfil?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nomeUsuario?: true
    email?: true
    senhaHash?: true
    biografia?: true
    urlFotoPerfil?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia: string | null
    urlFotoPerfil: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    biografia?: boolean
    urlFotoPerfil?: boolean
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    curtidas?: boolean | Usuario$curtidasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    biografia?: boolean
    urlFotoPerfil?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    biografia?: boolean
    urlFotoPerfil?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    biografia?: boolean
    urlFotoPerfil?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeUsuario" | "email" | "senhaHash" | "biografia" | "urlFotoPerfil", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    curtidas?: boolean | Usuario$curtidasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      posts: Prisma.$PostsPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      curtidas: Prisma.$CurtidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeUsuario: string
      email: string
      senhaHash: string
      biografia: string | null
      urlFotoPerfil: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Usuario$postsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Usuario$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curtidas<T extends Usuario$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nomeUsuario: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senhaHash: FieldRef<"Usuario", 'String'>
    readonly biografia: FieldRef<"Usuario", 'String'>
    readonly urlFotoPerfil: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.posts
   */
  export type Usuario$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Usuario.comentarios
   */
  export type Usuario$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Usuario.curtidas
   */
  export type Usuario$curtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    where?: CurtidaWhereInput
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    cursor?: CurtidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    autorId: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    autorId: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    categoria: string | null
    autorId: number | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    categoria: string | null
    autorId: number | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    titulo: number
    conteudo: number
    criadoEm: number
    atualizadoEm: number
    categoria: number
    autorId: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    autorId?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    autorId?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    criadoEm?: true
    atualizadoEm?: true
    categoria?: true
    autorId?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    criadoEm?: true
    atualizadoEm?: true
    categoria?: true
    autorId?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    criadoEm?: true
    atualizadoEm?: true
    categoria?: true
    autorId?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    titulo: string
    conteudo: string
    criadoEm: Date
    atualizadoEm: Date | null
    categoria: string | null
    autorId: number
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    categoria?: boolean
    autorId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentarios?: boolean | Posts$comentariosArgs<ExtArgs>
    curtidas?: boolean | Posts$curtidasArgs<ExtArgs>
    imagens?: boolean | Posts$imagensArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    categoria?: boolean
    autorId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    categoria?: boolean
    autorId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    categoria?: boolean
    autorId?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "conteudo" | "criadoEm" | "atualizadoEm" | "categoria" | "autorId", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentarios?: boolean | Posts$comentariosArgs<ExtArgs>
    curtidas?: boolean | Posts$curtidasArgs<ExtArgs>
    imagens?: boolean | Posts$imagensArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      curtidas: Prisma.$CurtidaPayload<ExtArgs>[]
      imagens: Prisma.$ImagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      conteudo: string
      criadoEm: Date
      atualizadoEm: Date | null
      categoria: string | null
      autorId: number
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comentarios<T extends Posts$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Posts$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curtidas<T extends Posts$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, Posts$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imagens<T extends Posts$imagensArgs<ExtArgs> = {}>(args?: Subset<T, Posts$imagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'Int'>
    readonly titulo: FieldRef<"Posts", 'String'>
    readonly conteudo: FieldRef<"Posts", 'String'>
    readonly criadoEm: FieldRef<"Posts", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Posts", 'DateTime'>
    readonly categoria: FieldRef<"Posts", 'String'>
    readonly autorId: FieldRef<"Posts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.comentarios
   */
  export type Posts$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Posts.curtidas
   */
  export type Posts$curtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    where?: CurtidaWhereInput
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    cursor?: CurtidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Posts.imagens
   */
  export type Posts$imagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    where?: ImagemWhereInput
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    cursor?: ImagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagemScalarFieldEnum | ImagemScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model Imagem
   */

  export type AggregateImagem = {
    _count: ImagemCountAggregateOutputType | null
    _avg: ImagemAvgAggregateOutputType | null
    _sum: ImagemSumAggregateOutputType | null
    _min: ImagemMinAggregateOutputType | null
    _max: ImagemMaxAggregateOutputType | null
  }

  export type ImagemAvgAggregateOutputType = {
    id: number | null
    ordem: number | null
    postId: number | null
  }

  export type ImagemSumAggregateOutputType = {
    id: number | null
    ordem: number | null
    postId: number | null
  }

  export type ImagemMinAggregateOutputType = {
    id: number | null
    url: string | null
    ordem: number | null
    postId: number | null
  }

  export type ImagemMaxAggregateOutputType = {
    id: number | null
    url: string | null
    ordem: number | null
    postId: number | null
  }

  export type ImagemCountAggregateOutputType = {
    id: number
    url: number
    ordem: number
    postId: number
    _all: number
  }


  export type ImagemAvgAggregateInputType = {
    id?: true
    ordem?: true
    postId?: true
  }

  export type ImagemSumAggregateInputType = {
    id?: true
    ordem?: true
    postId?: true
  }

  export type ImagemMinAggregateInputType = {
    id?: true
    url?: true
    ordem?: true
    postId?: true
  }

  export type ImagemMaxAggregateInputType = {
    id?: true
    url?: true
    ordem?: true
    postId?: true
  }

  export type ImagemCountAggregateInputType = {
    id?: true
    url?: true
    ordem?: true
    postId?: true
    _all?: true
  }

  export type ImagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagem to aggregate.
     */
    where?: ImagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagems to fetch.
     */
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imagems
    **/
    _count?: true | ImagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagemMaxAggregateInputType
  }

  export type GetImagemAggregateType<T extends ImagemAggregateArgs> = {
        [P in keyof T & keyof AggregateImagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagem[P]>
      : GetScalarType<T[P], AggregateImagem[P]>
  }




  export type ImagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagemWhereInput
    orderBy?: ImagemOrderByWithAggregationInput | ImagemOrderByWithAggregationInput[]
    by: ImagemScalarFieldEnum[] | ImagemScalarFieldEnum
    having?: ImagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagemCountAggregateInputType | true
    _avg?: ImagemAvgAggregateInputType
    _sum?: ImagemSumAggregateInputType
    _min?: ImagemMinAggregateInputType
    _max?: ImagemMaxAggregateInputType
  }

  export type ImagemGroupByOutputType = {
    id: number
    url: string
    ordem: number | null
    postId: number
    _count: ImagemCountAggregateOutputType | null
    _avg: ImagemAvgAggregateOutputType | null
    _sum: ImagemSumAggregateOutputType | null
    _min: ImagemMinAggregateOutputType | null
    _max: ImagemMaxAggregateOutputType | null
  }

  type GetImagemGroupByPayload<T extends ImagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagemGroupByOutputType[P]>
            : GetScalarType<T[P], ImagemGroupByOutputType[P]>
        }
      >
    >


  export type ImagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    ordem?: boolean
    postId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagem"]>

  export type ImagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    ordem?: boolean
    postId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagem"]>

  export type ImagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    ordem?: boolean
    postId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagem"]>

  export type ImagemSelectScalar = {
    id?: boolean
    url?: boolean
    ordem?: boolean
    postId?: boolean
  }

  export type ImagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "ordem" | "postId", ExtArgs["result"]["imagem"]>
  export type ImagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type ImagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type ImagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $ImagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imagem"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      ordem: number | null
      postId: number
    }, ExtArgs["result"]["imagem"]>
    composites: {}
  }

  type ImagemGetPayload<S extends boolean | null | undefined | ImagemDefaultArgs> = $Result.GetResult<Prisma.$ImagemPayload, S>

  type ImagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagemCountAggregateInputType | true
    }

  export interface ImagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imagem'], meta: { name: 'Imagem' } }
    /**
     * Find zero or one Imagem that matches the filter.
     * @param {ImagemFindUniqueArgs} args - Arguments to find a Imagem
     * @example
     * // Get one Imagem
     * const imagem = await prisma.imagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagemFindUniqueArgs>(args: SelectSubset<T, ImagemFindUniqueArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagemFindUniqueOrThrowArgs} args - Arguments to find a Imagem
     * @example
     * // Get one Imagem
     * const imagem = await prisma.imagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagemFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemFindFirstArgs} args - Arguments to find a Imagem
     * @example
     * // Get one Imagem
     * const imagem = await prisma.imagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagemFindFirstArgs>(args?: SelectSubset<T, ImagemFindFirstArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemFindFirstOrThrowArgs} args - Arguments to find a Imagem
     * @example
     * // Get one Imagem
     * const imagem = await prisma.imagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagemFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imagems
     * const imagems = await prisma.imagem.findMany()
     * 
     * // Get first 10 Imagems
     * const imagems = await prisma.imagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagemWithIdOnly = await prisma.imagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagemFindManyArgs>(args?: SelectSubset<T, ImagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imagem.
     * @param {ImagemCreateArgs} args - Arguments to create a Imagem.
     * @example
     * // Create one Imagem
     * const Imagem = await prisma.imagem.create({
     *   data: {
     *     // ... data to create a Imagem
     *   }
     * })
     * 
     */
    create<T extends ImagemCreateArgs>(args: SelectSubset<T, ImagemCreateArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imagems.
     * @param {ImagemCreateManyArgs} args - Arguments to create many Imagems.
     * @example
     * // Create many Imagems
     * const imagem = await prisma.imagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagemCreateManyArgs>(args?: SelectSubset<T, ImagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imagems and returns the data saved in the database.
     * @param {ImagemCreateManyAndReturnArgs} args - Arguments to create many Imagems.
     * @example
     * // Create many Imagems
     * const imagem = await prisma.imagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imagems and only return the `id`
     * const imagemWithIdOnly = await prisma.imagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagemCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Imagem.
     * @param {ImagemDeleteArgs} args - Arguments to delete one Imagem.
     * @example
     * // Delete one Imagem
     * const Imagem = await prisma.imagem.delete({
     *   where: {
     *     // ... filter to delete one Imagem
     *   }
     * })
     * 
     */
    delete<T extends ImagemDeleteArgs>(args: SelectSubset<T, ImagemDeleteArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imagem.
     * @param {ImagemUpdateArgs} args - Arguments to update one Imagem.
     * @example
     * // Update one Imagem
     * const imagem = await prisma.imagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagemUpdateArgs>(args: SelectSubset<T, ImagemUpdateArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imagems.
     * @param {ImagemDeleteManyArgs} args - Arguments to filter Imagems to delete.
     * @example
     * // Delete a few Imagems
     * const { count } = await prisma.imagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagemDeleteManyArgs>(args?: SelectSubset<T, ImagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imagems
     * const imagem = await prisma.imagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagemUpdateManyArgs>(args: SelectSubset<T, ImagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagems and returns the data updated in the database.
     * @param {ImagemUpdateManyAndReturnArgs} args - Arguments to update many Imagems.
     * @example
     * // Update many Imagems
     * const imagem = await prisma.imagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imagems and only return the `id`
     * const imagemWithIdOnly = await prisma.imagem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImagemUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Imagem.
     * @param {ImagemUpsertArgs} args - Arguments to update or create a Imagem.
     * @example
     * // Update or create a Imagem
     * const imagem = await prisma.imagem.upsert({
     *   create: {
     *     // ... data to create a Imagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imagem we want to update
     *   }
     * })
     */
    upsert<T extends ImagemUpsertArgs>(args: SelectSubset<T, ImagemUpsertArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemCountArgs} args - Arguments to filter Imagems to count.
     * @example
     * // Count the number of Imagems
     * const count = await prisma.imagem.count({
     *   where: {
     *     // ... the filter for the Imagems we want to count
     *   }
     * })
    **/
    count<T extends ImagemCountArgs>(
      args?: Subset<T, ImagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagemAggregateArgs>(args: Subset<T, ImagemAggregateArgs>): Prisma.PrismaPromise<GetImagemAggregateType<T>>

    /**
     * Group by Imagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagemGroupByArgs['orderBy'] }
        : { orderBy?: ImagemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imagem model
   */
  readonly fields: ImagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Imagem model
   */
  interface ImagemFieldRefs {
    readonly id: FieldRef<"Imagem", 'Int'>
    readonly url: FieldRef<"Imagem", 'String'>
    readonly ordem: FieldRef<"Imagem", 'Int'>
    readonly postId: FieldRef<"Imagem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Imagem findUnique
   */
  export type ImagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagem to fetch.
     */
    where: ImagemWhereUniqueInput
  }

  /**
   * Imagem findUniqueOrThrow
   */
  export type ImagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagem to fetch.
     */
    where: ImagemWhereUniqueInput
  }

  /**
   * Imagem findFirst
   */
  export type ImagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagem to fetch.
     */
    where?: ImagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagems to fetch.
     */
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagems.
     */
    cursor?: ImagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagems.
     */
    distinct?: ImagemScalarFieldEnum | ImagemScalarFieldEnum[]
  }

  /**
   * Imagem findFirstOrThrow
   */
  export type ImagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagem to fetch.
     */
    where?: ImagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagems to fetch.
     */
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagems.
     */
    cursor?: ImagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagems.
     */
    distinct?: ImagemScalarFieldEnum | ImagemScalarFieldEnum[]
  }

  /**
   * Imagem findMany
   */
  export type ImagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagems to fetch.
     */
    where?: ImagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagems to fetch.
     */
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imagems.
     */
    cursor?: ImagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagems.
     */
    skip?: number
    distinct?: ImagemScalarFieldEnum | ImagemScalarFieldEnum[]
  }

  /**
   * Imagem create
   */
  export type ImagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Imagem.
     */
    data: XOR<ImagemCreateInput, ImagemUncheckedCreateInput>
  }

  /**
   * Imagem createMany
   */
  export type ImagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imagems.
     */
    data: ImagemCreateManyInput | ImagemCreateManyInput[]
  }

  /**
   * Imagem createManyAndReturn
   */
  export type ImagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * The data used to create many Imagems.
     */
    data: ImagemCreateManyInput | ImagemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imagem update
   */
  export type ImagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Imagem.
     */
    data: XOR<ImagemUpdateInput, ImagemUncheckedUpdateInput>
    /**
     * Choose, which Imagem to update.
     */
    where: ImagemWhereUniqueInput
  }

  /**
   * Imagem updateMany
   */
  export type ImagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imagems.
     */
    data: XOR<ImagemUpdateManyMutationInput, ImagemUncheckedUpdateManyInput>
    /**
     * Filter which Imagems to update
     */
    where?: ImagemWhereInput
    /**
     * Limit how many Imagems to update.
     */
    limit?: number
  }

  /**
   * Imagem updateManyAndReturn
   */
  export type ImagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * The data used to update Imagems.
     */
    data: XOR<ImagemUpdateManyMutationInput, ImagemUncheckedUpdateManyInput>
    /**
     * Filter which Imagems to update
     */
    where?: ImagemWhereInput
    /**
     * Limit how many Imagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imagem upsert
   */
  export type ImagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Imagem to update in case it exists.
     */
    where: ImagemWhereUniqueInput
    /**
     * In case the Imagem found by the `where` argument doesn't exist, create a new Imagem with this data.
     */
    create: XOR<ImagemCreateInput, ImagemUncheckedCreateInput>
    /**
     * In case the Imagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagemUpdateInput, ImagemUncheckedUpdateInput>
  }

  /**
   * Imagem delete
   */
  export type ImagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter which Imagem to delete.
     */
    where: ImagemWhereUniqueInput
  }

  /**
   * Imagem deleteMany
   */
  export type ImagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagems to delete
     */
    where?: ImagemWhereInput
    /**
     * Limit how many Imagems to delete.
     */
    limit?: number
  }

  /**
   * Imagem without action
   */
  export type ImagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    autorId: number | null
    postId: number | null
    respostaDeId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    autorId: number | null
    postId: number | null
    respostaDeId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    conteudo: string | null
    criadoEm: Date | null
    autorId: number | null
    postId: number | null
    respostaDeId: number | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    conteudo: string | null
    criadoEm: Date | null
    autorId: number | null
    postId: number | null
    respostaDeId: number | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    conteudo: number
    criadoEm: number
    autorId: number
    postId: number
    respostaDeId: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    autorId?: true
    postId?: true
    respostaDeId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    autorId?: true
    postId?: true
    respostaDeId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    conteudo?: true
    criadoEm?: true
    autorId?: true
    postId?: true
    respostaDeId?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    conteudo?: true
    criadoEm?: true
    autorId?: true
    postId?: true
    respostaDeId?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    conteudo?: true
    criadoEm?: true
    autorId?: true
    postId?: true
    respostaDeId?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    conteudo: string
    criadoEm: Date
    autorId: number
    postId: number
    respostaDeId: number | null
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    postId?: boolean
    respostaDeId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    respostas?: boolean | Comentario$respostasArgs<ExtArgs>
    respostaDe?: boolean | Comentario$respostaDeArgs<ExtArgs>
    _count?: boolean | ComentarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    postId?: boolean
    respostaDeId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    respostaDe?: boolean | Comentario$respostaDeArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    postId?: boolean
    respostaDeId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    respostaDe?: boolean | Comentario$respostaDeArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectScalar = {
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    postId?: boolean
    respostaDeId?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conteudo" | "criadoEm" | "autorId" | "postId" | "respostaDeId", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    respostas?: boolean | Comentario$respostasArgs<ExtArgs>
    respostaDe?: boolean | Comentario$respostaDeArgs<ExtArgs>
    _count?: boolean | ComentarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    respostaDe?: boolean | Comentario$respostaDeArgs<ExtArgs>
  }
  export type ComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    respostaDe?: boolean | Comentario$respostaDeArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs>
      respostas: Prisma.$ComentarioPayload<ExtArgs>[]
      respostaDe: Prisma.$ComentarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conteudo: string
      criadoEm: Date
      autorId: number
      postId: number
      respostaDeId: number | null
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comentarios and returns the data saved in the database.
     * @param {ComentarioCreateManyAndReturnArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios and returns the data updated in the database.
     * @param {ComentarioUpdateManyAndReturnArgs} args - Arguments to update many Comentarios.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComentarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    respostas<T extends Comentario$respostasArgs<ExtArgs> = {}>(args?: Subset<T, Comentario$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    respostaDe<T extends Comentario$respostaDeArgs<ExtArgs> = {}>(args?: Subset<T, Comentario$respostaDeArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'Int'>
    readonly conteudo: FieldRef<"Comentario", 'String'>
    readonly criadoEm: FieldRef<"Comentario", 'DateTime'>
    readonly autorId: FieldRef<"Comentario", 'Int'>
    readonly postId: FieldRef<"Comentario", 'Int'>
    readonly respostaDeId: FieldRef<"Comentario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
  }

  /**
   * Comentario createManyAndReturn
   */
  export type ComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario updateManyAndReturn
   */
  export type ComentarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario.respostas
   */
  export type Comentario$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario.respostaDe
   */
  export type Comentario$respostaDeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model Curtida
   */

  export type AggregateCurtida = {
    _count: CurtidaCountAggregateOutputType | null
    _avg: CurtidaAvgAggregateOutputType | null
    _sum: CurtidaSumAggregateOutputType | null
    _min: CurtidaMinAggregateOutputType | null
    _max: CurtidaMaxAggregateOutputType | null
  }

  export type CurtidaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    postId: number | null
  }

  export type CurtidaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    postId: number | null
  }

  export type CurtidaMinAggregateOutputType = {
    id: number | null
    criadoEm: Date | null
    usuarioId: number | null
    postId: number | null
  }

  export type CurtidaMaxAggregateOutputType = {
    id: number | null
    criadoEm: Date | null
    usuarioId: number | null
    postId: number | null
  }

  export type CurtidaCountAggregateOutputType = {
    id: number
    criadoEm: number
    usuarioId: number
    postId: number
    _all: number
  }


  export type CurtidaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    postId?: true
  }

  export type CurtidaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    postId?: true
  }

  export type CurtidaMinAggregateInputType = {
    id?: true
    criadoEm?: true
    usuarioId?: true
    postId?: true
  }

  export type CurtidaMaxAggregateInputType = {
    id?: true
    criadoEm?: true
    usuarioId?: true
    postId?: true
  }

  export type CurtidaCountAggregateInputType = {
    id?: true
    criadoEm?: true
    usuarioId?: true
    postId?: true
    _all?: true
  }

  export type CurtidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curtida to aggregate.
     */
    where?: CurtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curtidas to fetch.
     */
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Curtidas
    **/
    _count?: true | CurtidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurtidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurtidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurtidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurtidaMaxAggregateInputType
  }

  export type GetCurtidaAggregateType<T extends CurtidaAggregateArgs> = {
        [P in keyof T & keyof AggregateCurtida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurtida[P]>
      : GetScalarType<T[P], AggregateCurtida[P]>
  }




  export type CurtidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaWhereInput
    orderBy?: CurtidaOrderByWithAggregationInput | CurtidaOrderByWithAggregationInput[]
    by: CurtidaScalarFieldEnum[] | CurtidaScalarFieldEnum
    having?: CurtidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurtidaCountAggregateInputType | true
    _avg?: CurtidaAvgAggregateInputType
    _sum?: CurtidaSumAggregateInputType
    _min?: CurtidaMinAggregateInputType
    _max?: CurtidaMaxAggregateInputType
  }

  export type CurtidaGroupByOutputType = {
    id: number
    criadoEm: Date
    usuarioId: number
    postId: number
    _count: CurtidaCountAggregateOutputType | null
    _avg: CurtidaAvgAggregateOutputType | null
    _sum: CurtidaSumAggregateOutputType | null
    _min: CurtidaMinAggregateOutputType | null
    _max: CurtidaMaxAggregateOutputType | null
  }

  type GetCurtidaGroupByPayload<T extends CurtidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurtidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurtidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurtidaGroupByOutputType[P]>
            : GetScalarType<T[P], CurtidaGroupByOutputType[P]>
        }
      >
    >


  export type CurtidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    postId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtida"]>

  export type CurtidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    postId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtida"]>

  export type CurtidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    postId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtida"]>

  export type CurtidaSelectScalar = {
    id?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    postId?: boolean
  }

  export type CurtidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "criadoEm" | "usuarioId" | "postId", ExtArgs["result"]["curtida"]>
  export type CurtidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type CurtidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type CurtidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $CurtidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curtida"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      criadoEm: Date
      usuarioId: number
      postId: number
    }, ExtArgs["result"]["curtida"]>
    composites: {}
  }

  type CurtidaGetPayload<S extends boolean | null | undefined | CurtidaDefaultArgs> = $Result.GetResult<Prisma.$CurtidaPayload, S>

  type CurtidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurtidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurtidaCountAggregateInputType | true
    }

  export interface CurtidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curtida'], meta: { name: 'Curtida' } }
    /**
     * Find zero or one Curtida that matches the filter.
     * @param {CurtidaFindUniqueArgs} args - Arguments to find a Curtida
     * @example
     * // Get one Curtida
     * const curtida = await prisma.curtida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurtidaFindUniqueArgs>(args: SelectSubset<T, CurtidaFindUniqueArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curtida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurtidaFindUniqueOrThrowArgs} args - Arguments to find a Curtida
     * @example
     * // Get one Curtida
     * const curtida = await prisma.curtida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurtidaFindUniqueOrThrowArgs>(args: SelectSubset<T, CurtidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curtida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaFindFirstArgs} args - Arguments to find a Curtida
     * @example
     * // Get one Curtida
     * const curtida = await prisma.curtida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurtidaFindFirstArgs>(args?: SelectSubset<T, CurtidaFindFirstArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curtida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaFindFirstOrThrowArgs} args - Arguments to find a Curtida
     * @example
     * // Get one Curtida
     * const curtida = await prisma.curtida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurtidaFindFirstOrThrowArgs>(args?: SelectSubset<T, CurtidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curtidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curtidas
     * const curtidas = await prisma.curtida.findMany()
     * 
     * // Get first 10 Curtidas
     * const curtidas = await prisma.curtida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curtidaWithIdOnly = await prisma.curtida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurtidaFindManyArgs>(args?: SelectSubset<T, CurtidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curtida.
     * @param {CurtidaCreateArgs} args - Arguments to create a Curtida.
     * @example
     * // Create one Curtida
     * const Curtida = await prisma.curtida.create({
     *   data: {
     *     // ... data to create a Curtida
     *   }
     * })
     * 
     */
    create<T extends CurtidaCreateArgs>(args: SelectSubset<T, CurtidaCreateArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curtidas.
     * @param {CurtidaCreateManyArgs} args - Arguments to create many Curtidas.
     * @example
     * // Create many Curtidas
     * const curtida = await prisma.curtida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurtidaCreateManyArgs>(args?: SelectSubset<T, CurtidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curtidas and returns the data saved in the database.
     * @param {CurtidaCreateManyAndReturnArgs} args - Arguments to create many Curtidas.
     * @example
     * // Create many Curtidas
     * const curtida = await prisma.curtida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curtidas and only return the `id`
     * const curtidaWithIdOnly = await prisma.curtida.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurtidaCreateManyAndReturnArgs>(args?: SelectSubset<T, CurtidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curtida.
     * @param {CurtidaDeleteArgs} args - Arguments to delete one Curtida.
     * @example
     * // Delete one Curtida
     * const Curtida = await prisma.curtida.delete({
     *   where: {
     *     // ... filter to delete one Curtida
     *   }
     * })
     * 
     */
    delete<T extends CurtidaDeleteArgs>(args: SelectSubset<T, CurtidaDeleteArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curtida.
     * @param {CurtidaUpdateArgs} args - Arguments to update one Curtida.
     * @example
     * // Update one Curtida
     * const curtida = await prisma.curtida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurtidaUpdateArgs>(args: SelectSubset<T, CurtidaUpdateArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curtidas.
     * @param {CurtidaDeleteManyArgs} args - Arguments to filter Curtidas to delete.
     * @example
     * // Delete a few Curtidas
     * const { count } = await prisma.curtida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurtidaDeleteManyArgs>(args?: SelectSubset<T, CurtidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curtidas
     * const curtida = await prisma.curtida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurtidaUpdateManyArgs>(args: SelectSubset<T, CurtidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curtidas and returns the data updated in the database.
     * @param {CurtidaUpdateManyAndReturnArgs} args - Arguments to update many Curtidas.
     * @example
     * // Update many Curtidas
     * const curtida = await prisma.curtida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curtidas and only return the `id`
     * const curtidaWithIdOnly = await prisma.curtida.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurtidaUpdateManyAndReturnArgs>(args: SelectSubset<T, CurtidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curtida.
     * @param {CurtidaUpsertArgs} args - Arguments to update or create a Curtida.
     * @example
     * // Update or create a Curtida
     * const curtida = await prisma.curtida.upsert({
     *   create: {
     *     // ... data to create a Curtida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curtida we want to update
     *   }
     * })
     */
    upsert<T extends CurtidaUpsertArgs>(args: SelectSubset<T, CurtidaUpsertArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaCountArgs} args - Arguments to filter Curtidas to count.
     * @example
     * // Count the number of Curtidas
     * const count = await prisma.curtida.count({
     *   where: {
     *     // ... the filter for the Curtidas we want to count
     *   }
     * })
    **/
    count<T extends CurtidaCountArgs>(
      args?: Subset<T, CurtidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurtidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curtida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurtidaAggregateArgs>(args: Subset<T, CurtidaAggregateArgs>): Prisma.PrismaPromise<GetCurtidaAggregateType<T>>

    /**
     * Group by Curtida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurtidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurtidaGroupByArgs['orderBy'] }
        : { orderBy?: CurtidaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurtidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurtidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curtida model
   */
  readonly fields: CurtidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curtida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurtidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curtida model
   */
  interface CurtidaFieldRefs {
    readonly id: FieldRef<"Curtida", 'Int'>
    readonly criadoEm: FieldRef<"Curtida", 'DateTime'>
    readonly usuarioId: FieldRef<"Curtida", 'Int'>
    readonly postId: FieldRef<"Curtida", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Curtida findUnique
   */
  export type CurtidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtida to fetch.
     */
    where: CurtidaWhereUniqueInput
  }

  /**
   * Curtida findUniqueOrThrow
   */
  export type CurtidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtida to fetch.
     */
    where: CurtidaWhereUniqueInput
  }

  /**
   * Curtida findFirst
   */
  export type CurtidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtida to fetch.
     */
    where?: CurtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curtidas to fetch.
     */
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curtidas.
     */
    cursor?: CurtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curtidas.
     */
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Curtida findFirstOrThrow
   */
  export type CurtidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtida to fetch.
     */
    where?: CurtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curtidas to fetch.
     */
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curtidas.
     */
    cursor?: CurtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curtidas.
     */
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Curtida findMany
   */
  export type CurtidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtidas to fetch.
     */
    where?: CurtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curtidas to fetch.
     */
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Curtidas.
     */
    cursor?: CurtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curtidas.
     */
    skip?: number
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Curtida create
   */
  export type CurtidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * The data needed to create a Curtida.
     */
    data: XOR<CurtidaCreateInput, CurtidaUncheckedCreateInput>
  }

  /**
   * Curtida createMany
   */
  export type CurtidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Curtidas.
     */
    data: CurtidaCreateManyInput | CurtidaCreateManyInput[]
  }

  /**
   * Curtida createManyAndReturn
   */
  export type CurtidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * The data used to create many Curtidas.
     */
    data: CurtidaCreateManyInput | CurtidaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curtida update
   */
  export type CurtidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * The data needed to update a Curtida.
     */
    data: XOR<CurtidaUpdateInput, CurtidaUncheckedUpdateInput>
    /**
     * Choose, which Curtida to update.
     */
    where: CurtidaWhereUniqueInput
  }

  /**
   * Curtida updateMany
   */
  export type CurtidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Curtidas.
     */
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyInput>
    /**
     * Filter which Curtidas to update
     */
    where?: CurtidaWhereInput
    /**
     * Limit how many Curtidas to update.
     */
    limit?: number
  }

  /**
   * Curtida updateManyAndReturn
   */
  export type CurtidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * The data used to update Curtidas.
     */
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyInput>
    /**
     * Filter which Curtidas to update
     */
    where?: CurtidaWhereInput
    /**
     * Limit how many Curtidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curtida upsert
   */
  export type CurtidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * The filter to search for the Curtida to update in case it exists.
     */
    where: CurtidaWhereUniqueInput
    /**
     * In case the Curtida found by the `where` argument doesn't exist, create a new Curtida with this data.
     */
    create: XOR<CurtidaCreateInput, CurtidaUncheckedCreateInput>
    /**
     * In case the Curtida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurtidaUpdateInput, CurtidaUncheckedUpdateInput>
  }

  /**
   * Curtida delete
   */
  export type CurtidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter which Curtida to delete.
     */
    where: CurtidaWhereUniqueInput
  }

  /**
   * Curtida deleteMany
   */
  export type CurtidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curtidas to delete
     */
    where?: CurtidaWhereInput
    /**
     * Limit how many Curtidas to delete.
     */
    limit?: number
  }

  /**
   * Curtida without action
   */
  export type CurtidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nomeUsuario: 'nomeUsuario',
    email: 'email',
    senhaHash: 'senhaHash',
    biografia: 'biografia',
    urlFotoPerfil: 'urlFotoPerfil'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    conteudo: 'conteudo',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    categoria: 'categoria',
    autorId: 'autorId'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const ImagemScalarFieldEnum: {
    id: 'id',
    url: 'url',
    ordem: 'ordem',
    postId: 'postId'
  };

  export type ImagemScalarFieldEnum = (typeof ImagemScalarFieldEnum)[keyof typeof ImagemScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    criadoEm: 'criadoEm',
    autorId: 'autorId',
    postId: 'postId',
    respostaDeId: 'respostaDeId'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const CurtidaScalarFieldEnum: {
    id: 'id',
    criadoEm: 'criadoEm',
    usuarioId: 'usuarioId',
    postId: 'postId'
  };

  export type CurtidaScalarFieldEnum = (typeof CurtidaScalarFieldEnum)[keyof typeof CurtidaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nomeUsuario?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    biografia?: StringNullableFilter<"Usuario"> | string | null
    urlFotoPerfil?: StringNullableFilter<"Usuario"> | string | null
    posts?: PostsListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrderInput | SortOrder
    urlFotoPerfil?: SortOrderInput | SortOrder
    posts?: PostsOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    curtidas?: CurtidaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nomeUsuario?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senhaHash?: StringFilter<"Usuario"> | string
    biografia?: StringNullableFilter<"Usuario"> | string | null
    urlFotoPerfil?: StringNullableFilter<"Usuario"> | string | null
    posts?: PostsListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
  }, "id" | "nomeUsuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrderInput | SortOrder
    urlFotoPerfil?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nomeUsuario?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senhaHash?: StringWithAggregatesFilter<"Usuario"> | string
    biografia?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    urlFotoPerfil?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: IntFilter<"Posts"> | number
    titulo?: StringFilter<"Posts"> | string
    conteudo?: StringFilter<"Posts"> | string
    criadoEm?: DateTimeFilter<"Posts"> | Date | string
    atualizadoEm?: DateTimeNullableFilter<"Posts"> | Date | string | null
    categoria?: StringNullableFilter<"Posts"> | string | null
    autorId?: IntFilter<"Posts"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
    imagens?: ImagemListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    autorId?: SortOrder
    autor?: UsuarioOrderByWithRelationInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    curtidas?: CurtidaOrderByRelationAggregateInput
    imagens?: ImagemOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    titulo?: StringFilter<"Posts"> | string
    conteudo?: StringFilter<"Posts"> | string
    criadoEm?: DateTimeFilter<"Posts"> | Date | string
    atualizadoEm?: DateTimeNullableFilter<"Posts"> | Date | string | null
    categoria?: StringNullableFilter<"Posts"> | string | null
    autorId?: IntFilter<"Posts"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
    imagens?: ImagemListRelationFilter
  }, "id">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    autorId?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _avg?: PostsAvgOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
    _sum?: PostsSumOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Posts"> | number
    titulo?: StringWithAggregatesFilter<"Posts"> | string
    conteudo?: StringWithAggregatesFilter<"Posts"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    atualizadoEm?: DateTimeNullableWithAggregatesFilter<"Posts"> | Date | string | null
    categoria?: StringNullableWithAggregatesFilter<"Posts"> | string | null
    autorId?: IntWithAggregatesFilter<"Posts"> | number
  }

  export type ImagemWhereInput = {
    AND?: ImagemWhereInput | ImagemWhereInput[]
    OR?: ImagemWhereInput[]
    NOT?: ImagemWhereInput | ImagemWhereInput[]
    id?: IntFilter<"Imagem"> | number
    url?: StringFilter<"Imagem"> | string
    ordem?: IntNullableFilter<"Imagem"> | number | null
    postId?: IntFilter<"Imagem"> | number
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type ImagemOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    ordem?: SortOrderInput | SortOrder
    postId?: SortOrder
    post?: PostsOrderByWithRelationInput
  }

  export type ImagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagemWhereInput | ImagemWhereInput[]
    OR?: ImagemWhereInput[]
    NOT?: ImagemWhereInput | ImagemWhereInput[]
    url?: StringFilter<"Imagem"> | string
    ordem?: IntNullableFilter<"Imagem"> | number | null
    postId?: IntFilter<"Imagem"> | number
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id">

  export type ImagemOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    ordem?: SortOrderInput | SortOrder
    postId?: SortOrder
    _count?: ImagemCountOrderByAggregateInput
    _avg?: ImagemAvgOrderByAggregateInput
    _max?: ImagemMaxOrderByAggregateInput
    _min?: ImagemMinOrderByAggregateInput
    _sum?: ImagemSumOrderByAggregateInput
  }

  export type ImagemScalarWhereWithAggregatesInput = {
    AND?: ImagemScalarWhereWithAggregatesInput | ImagemScalarWhereWithAggregatesInput[]
    OR?: ImagemScalarWhereWithAggregatesInput[]
    NOT?: ImagemScalarWhereWithAggregatesInput | ImagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Imagem"> | number
    url?: StringWithAggregatesFilter<"Imagem"> | string
    ordem?: IntNullableWithAggregatesFilter<"Imagem"> | number | null
    postId?: IntWithAggregatesFilter<"Imagem"> | number
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    conteudo?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    postId?: IntFilter<"Comentario"> | number
    respostaDeId?: IntNullableFilter<"Comentario"> | number | null
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    respostas?: ComentarioListRelationFilter
    respostaDe?: XOR<ComentarioNullableScalarRelationFilter, ComentarioWhereInput> | null
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
    respostaDeId?: SortOrderInput | SortOrder
    autor?: UsuarioOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
    respostas?: ComentarioOrderByRelationAggregateInput
    respostaDe?: ComentarioOrderByWithRelationInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    conteudo?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    postId?: IntFilter<"Comentario"> | number
    respostaDeId?: IntNullableFilter<"Comentario"> | number | null
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    respostas?: ComentarioListRelationFilter
    respostaDe?: XOR<ComentarioNullableScalarRelationFilter, ComentarioWhereInput> | null
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
    respostaDeId?: SortOrderInput | SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentario"> | number
    conteudo?: StringWithAggregatesFilter<"Comentario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    autorId?: IntWithAggregatesFilter<"Comentario"> | number
    postId?: IntWithAggregatesFilter<"Comentario"> | number
    respostaDeId?: IntNullableWithAggregatesFilter<"Comentario"> | number | null
  }

  export type CurtidaWhereInput = {
    AND?: CurtidaWhereInput | CurtidaWhereInput[]
    OR?: CurtidaWhereInput[]
    NOT?: CurtidaWhereInput | CurtidaWhereInput[]
    id?: IntFilter<"Curtida"> | number
    criadoEm?: DateTimeFilter<"Curtida"> | Date | string
    usuarioId?: IntFilter<"Curtida"> | number
    postId?: IntFilter<"Curtida"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type CurtidaOrderByWithRelationInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
  }

  export type CurtidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_postId?: CurtidaUsuarioIdPostIdCompoundUniqueInput
    AND?: CurtidaWhereInput | CurtidaWhereInput[]
    OR?: CurtidaWhereInput[]
    NOT?: CurtidaWhereInput | CurtidaWhereInput[]
    criadoEm?: DateTimeFilter<"Curtida"> | Date | string
    usuarioId?: IntFilter<"Curtida"> | number
    postId?: IntFilter<"Curtida"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id" | "usuarioId_postId">

  export type CurtidaOrderByWithAggregationInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
    _count?: CurtidaCountOrderByAggregateInput
    _avg?: CurtidaAvgOrderByAggregateInput
    _max?: CurtidaMaxOrderByAggregateInput
    _min?: CurtidaMinOrderByAggregateInput
    _sum?: CurtidaSumOrderByAggregateInput
  }

  export type CurtidaScalarWhereWithAggregatesInput = {
    AND?: CurtidaScalarWhereWithAggregatesInput | CurtidaScalarWhereWithAggregatesInput[]
    OR?: CurtidaScalarWhereWithAggregatesInput[]
    NOT?: CurtidaScalarWhereWithAggregatesInput | CurtidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curtida"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Curtida"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Curtida"> | number
    postId?: IntWithAggregatesFilter<"Curtida"> | number
  }

  export type UsuarioCreateInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    posts?: PostsCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostsCreateInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    autor: UsuarioCreateNestedOneWithoutPostsInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
    curtidas?: CurtidaCreateNestedManyWithoutPostInput
    imagens?: ImagemCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    autorId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPostInput
    imagens?: ImagemUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUpdateManyWithoutPostNestedInput
    imagens?: ImagemUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPostNestedInput
    imagens?: ImagemUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    autorId: number
  }

  export type PostsUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemCreateInput = {
    url: string
    ordem?: number | null
    post: PostsCreateNestedOneWithoutImagensInput
  }

  export type ImagemUncheckedCreateInput = {
    id?: number
    url: string
    ordem?: number | null
    postId: number
  }

  export type ImagemUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    post?: PostsUpdateOneRequiredWithoutImagensNestedInput
  }

  export type ImagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemCreateManyInput = {
    id?: number
    url: string
    ordem?: number | null
    postId: number
  }

  export type ImagemUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateInput = {
    conteudo: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
    post: PostsCreateNestedOneWithoutComentariosInput
    respostas?: ComentarioCreateNestedManyWithoutRespostaDeInput
    respostaDe?: ComentarioCreateNestedOneWithoutRespostasInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    postId: number
    respostaDeId?: number | null
    respostas?: ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioUpdateInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    post?: PostsUpdateOneRequiredWithoutComentariosNestedInput
    respostas?: ComentarioUpdateManyWithoutRespostaDeNestedInput
    respostaDe?: ComentarioUpdateOneWithoutRespostasNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    respostas?: ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioCreateManyInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    postId: number
    respostaDeId?: number | null
  }

  export type ComentarioUpdateManyMutationInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CurtidaCreateInput = {
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCurtidasInput
    post: PostsCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaUncheckedCreateInput = {
    id?: number
    criadoEm?: Date | string
    usuarioId: number
    postId: number
  }

  export type CurtidaUpdateInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCurtidasNestedInput
    post?: PostsUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaCreateManyInput = {
    id?: number
    criadoEm?: Date | string
    usuarioId: number
    postId: number
  }

  export type CurtidaUpdateManyMutationInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type CurtidaListRelationFilter = {
    every?: CurtidaWhereInput
    some?: CurtidaWhereInput
    none?: CurtidaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurtidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrder
    urlFotoPerfil?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrder
    urlFotoPerfil?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrder
    urlFotoPerfil?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ImagemListRelationFilter = {
    every?: ImagemWhereInput
    some?: ImagemWhereInput
    none?: ImagemWhereInput
  }

  export type ImagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    categoria?: SortOrder
    autorId?: SortOrder
  }

  export type PostsAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    categoria?: SortOrder
    autorId?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    categoria?: SortOrder
    autorId?: SortOrder
  }

  export type PostsSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type ImagemCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type ImagemAvgOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type ImagemMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type ImagemMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type ImagemSumOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ComentarioNullableScalarRelationFilter = {
    is?: ComentarioWhereInput | null
    isNot?: ComentarioWhereInput | null
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
    respostaDeId?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
    respostaDeId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
    respostaDeId?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
    respostaDeId?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
    respostaDeId?: SortOrder
  }

  export type CurtidaUsuarioIdPostIdCompoundUniqueInput = {
    usuarioId: number
    postId: number
  }

  export type CurtidaCountOrderByAggregateInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaMaxOrderByAggregateInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaMinOrderByAggregateInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
  }

  export type PostsCreateNestedManyWithoutAutorInput = {
    create?: XOR<PostsCreateWithoutAutorInput, PostsUncheckedCreateWithoutAutorInput> | PostsCreateWithoutAutorInput[] | PostsUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAutorInput | PostsCreateOrConnectWithoutAutorInput[]
    createMany?: PostsCreateManyAutorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutAutorInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput> | CurtidaCreateWithoutUsuarioInput[] | CurtidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutUsuarioInput | CurtidaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CurtidaCreateManyUsuarioInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<PostsCreateWithoutAutorInput, PostsUncheckedCreateWithoutAutorInput> | PostsCreateWithoutAutorInput[] | PostsUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAutorInput | PostsCreateOrConnectWithoutAutorInput[]
    createMany?: PostsCreateManyAutorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput> | CurtidaCreateWithoutUsuarioInput[] | CurtidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutUsuarioInput | CurtidaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CurtidaCreateManyUsuarioInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostsUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PostsCreateWithoutAutorInput, PostsUncheckedCreateWithoutAutorInput> | PostsCreateWithoutAutorInput[] | PostsUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAutorInput | PostsCreateOrConnectWithoutAutorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAutorInput | PostsUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PostsCreateManyAutorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAutorInput | PostsUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAutorInput | PostsUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutAutorNestedInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAutorInput | ComentarioUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAutorInput | ComentarioUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAutorInput | ComentarioUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput> | CurtidaCreateWithoutUsuarioInput[] | CurtidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutUsuarioInput | CurtidaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutUsuarioInput | CurtidaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CurtidaCreateManyUsuarioInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutUsuarioInput | CurtidaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutUsuarioInput | CurtidaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostsUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PostsCreateWithoutAutorInput, PostsUncheckedCreateWithoutAutorInput> | PostsCreateWithoutAutorInput[] | PostsUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAutorInput | PostsCreateOrConnectWithoutAutorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAutorInput | PostsUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PostsCreateManyAutorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAutorInput | PostsUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAutorInput | PostsUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAutorInput | ComentarioUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAutorInput | ComentarioUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAutorInput | ComentarioUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput> | CurtidaCreateWithoutUsuarioInput[] | CurtidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutUsuarioInput | CurtidaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutUsuarioInput | CurtidaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CurtidaCreateManyUsuarioInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutUsuarioInput | CurtidaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutUsuarioInput | CurtidaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPostsInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ComentarioCreateNestedManyWithoutPostInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaCreateNestedManyWithoutPostInput = {
    create?: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput> | CurtidaCreateWithoutPostInput[] | CurtidaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPostInput | CurtidaCreateOrConnectWithoutPostInput[]
    createMany?: CurtidaCreateManyPostInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type ImagemCreateNestedManyWithoutPostInput = {
    create?: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput> | ImagemCreateWithoutPostInput[] | ImagemUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPostInput | ImagemCreateOrConnectWithoutPostInput[]
    createMany?: ImagemCreateManyPostInputEnvelope
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput> | CurtidaCreateWithoutPostInput[] | CurtidaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPostInput | CurtidaCreateOrConnectWithoutPostInput[]
    createMany?: CurtidaCreateManyPostInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type ImagemUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput> | ImagemCreateWithoutPostInput[] | ImagemUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPostInput | ImagemCreateOrConnectWithoutPostInput[]
    createMany?: ImagemCreateManyPostInputEnvelope
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    upsert?: UsuarioUpsertWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPostsInput, UsuarioUpdateWithoutPostsInput>, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type ComentarioUpdateManyWithoutPostNestedInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPostInput | ComentarioUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPostInput | ComentarioUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPostInput | ComentarioUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUpdateManyWithoutPostNestedInput = {
    create?: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput> | CurtidaCreateWithoutPostInput[] | CurtidaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPostInput | CurtidaCreateOrConnectWithoutPostInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutPostInput | CurtidaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CurtidaCreateManyPostInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutPostInput | CurtidaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutPostInput | CurtidaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type ImagemUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput> | ImagemCreateWithoutPostInput[] | ImagemUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPostInput | ImagemCreateOrConnectWithoutPostInput[]
    upsert?: ImagemUpsertWithWhereUniqueWithoutPostInput | ImagemUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImagemCreateManyPostInputEnvelope
    set?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    disconnect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    delete?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    update?: ImagemUpdateWithWhereUniqueWithoutPostInput | ImagemUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImagemUpdateManyWithWhereWithoutPostInput | ImagemUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPostInput | ComentarioUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPostInput | ComentarioUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPostInput | ComentarioUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput> | CurtidaCreateWithoutPostInput[] | CurtidaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPostInput | CurtidaCreateOrConnectWithoutPostInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutPostInput | CurtidaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CurtidaCreateManyPostInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutPostInput | CurtidaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutPostInput | CurtidaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type ImagemUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput> | ImagemCreateWithoutPostInput[] | ImagemUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPostInput | ImagemCreateOrConnectWithoutPostInput[]
    upsert?: ImagemUpsertWithWhereUniqueWithoutPostInput | ImagemUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImagemCreateManyPostInputEnvelope
    set?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    disconnect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    delete?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    update?: ImagemUpdateWithWhereUniqueWithoutPostInput | ImagemUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImagemUpdateManyWithWhereWithoutPostInput | ImagemUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutImagensInput = {
    create?: XOR<PostsCreateWithoutImagensInput, PostsUncheckedCreateWithoutImagensInput>
    connectOrCreate?: PostsCreateOrConnectWithoutImagensInput
    connect?: PostsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostsUpdateOneRequiredWithoutImagensNestedInput = {
    create?: XOR<PostsCreateWithoutImagensInput, PostsUncheckedCreateWithoutImagensInput>
    connectOrCreate?: PostsCreateOrConnectWithoutImagensInput
    upsert?: PostsUpsertWithoutImagensInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutImagensInput, PostsUpdateWithoutImagensInput>, PostsUncheckedUpdateWithoutImagensInput>
  }

  export type UsuarioCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutComentariosInput = {
    create?: XOR<PostsCreateWithoutComentariosInput, PostsUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PostsCreateOrConnectWithoutComentariosInput
    connect?: PostsWhereUniqueInput
  }

  export type ComentarioCreateNestedManyWithoutRespostaDeInput = {
    create?: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput> | ComentarioCreateWithoutRespostaDeInput[] | ComentarioUncheckedCreateWithoutRespostaDeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostaDeInput | ComentarioCreateOrConnectWithoutRespostaDeInput[]
    createMany?: ComentarioCreateManyRespostaDeInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ComentarioCreateNestedOneWithoutRespostasInput = {
    create?: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostasInput
    connect?: ComentarioWhereUniqueInput
  }

  export type ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput = {
    create?: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput> | ComentarioCreateWithoutRespostaDeInput[] | ComentarioUncheckedCreateWithoutRespostaDeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostaDeInput | ComentarioCreateOrConnectWithoutRespostaDeInput[]
    createMany?: ComentarioCreateManyRespostaDeInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    upsert?: UsuarioUpsertWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComentariosInput, UsuarioUpdateWithoutComentariosInput>, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type PostsUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<PostsCreateWithoutComentariosInput, PostsUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PostsCreateOrConnectWithoutComentariosInput
    upsert?: PostsUpsertWithoutComentariosInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutComentariosInput, PostsUpdateWithoutComentariosInput>, PostsUncheckedUpdateWithoutComentariosInput>
  }

  export type ComentarioUpdateManyWithoutRespostaDeNestedInput = {
    create?: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput> | ComentarioCreateWithoutRespostaDeInput[] | ComentarioUncheckedCreateWithoutRespostaDeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostaDeInput | ComentarioCreateOrConnectWithoutRespostaDeInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput | ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput[]
    createMany?: ComentarioCreateManyRespostaDeInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput | ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutRespostaDeInput | ComentarioUpdateManyWithWhereWithoutRespostaDeInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type ComentarioUpdateOneWithoutRespostasNestedInput = {
    create?: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostasInput
    upsert?: ComentarioUpsertWithoutRespostasInput
    disconnect?: ComentarioWhereInput | boolean
    delete?: ComentarioWhereInput | boolean
    connect?: ComentarioWhereUniqueInput
    update?: XOR<XOR<ComentarioUpdateToOneWithWhereWithoutRespostasInput, ComentarioUpdateWithoutRespostasInput>, ComentarioUncheckedUpdateWithoutRespostasInput>
  }

  export type ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput = {
    create?: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput> | ComentarioCreateWithoutRespostaDeInput[] | ComentarioUncheckedCreateWithoutRespostaDeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostaDeInput | ComentarioCreateOrConnectWithoutRespostaDeInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput | ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput[]
    createMany?: ComentarioCreateManyRespostaDeInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput | ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutRespostaDeInput | ComentarioUpdateManyWithWhereWithoutRespostaDeInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<PostsCreateWithoutCurtidasInput, PostsUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCurtidasInput
    connect?: PostsWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasInput
    upsert?: UsuarioUpsertWithoutCurtidasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCurtidasInput, UsuarioUpdateWithoutCurtidasInput>, UsuarioUncheckedUpdateWithoutCurtidasInput>
  }

  export type PostsUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<PostsCreateWithoutCurtidasInput, PostsUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCurtidasInput
    upsert?: PostsUpsertWithoutCurtidasInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutCurtidasInput, PostsUpdateWithoutCurtidasInput>, PostsUncheckedUpdateWithoutCurtidasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PostsCreateWithoutAutorInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
    curtidas?: CurtidaCreateNestedManyWithoutPostInput
    imagens?: ImagemCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutAutorInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPostInput
    imagens?: ImagemUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutAutorInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutAutorInput, PostsUncheckedCreateWithoutAutorInput>
  }

  export type PostsCreateManyAutorInputEnvelope = {
    data: PostsCreateManyAutorInput | PostsCreateManyAutorInput[]
  }

  export type ComentarioCreateWithoutAutorInput = {
    conteudo: string
    criadoEm?: Date | string
    post: PostsCreateNestedOneWithoutComentariosInput
    respostas?: ComentarioCreateNestedManyWithoutRespostaDeInput
    respostaDe?: ComentarioCreateNestedOneWithoutRespostasInput
  }

  export type ComentarioUncheckedCreateWithoutAutorInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    postId: number
    respostaDeId?: number | null
    respostas?: ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioCreateOrConnectWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput>
  }

  export type ComentarioCreateManyAutorInputEnvelope = {
    data: ComentarioCreateManyAutorInput | ComentarioCreateManyAutorInput[]
  }

  export type CurtidaCreateWithoutUsuarioInput = {
    criadoEm?: Date | string
    post: PostsCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    criadoEm?: Date | string
    postId: number
  }

  export type CurtidaCreateOrConnectWithoutUsuarioInput = {
    where: CurtidaWhereUniqueInput
    create: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput>
  }

  export type CurtidaCreateManyUsuarioInputEnvelope = {
    data: CurtidaCreateManyUsuarioInput | CurtidaCreateManyUsuarioInput[]
  }

  export type PostsUpsertWithWhereUniqueWithoutAutorInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutAutorInput, PostsUncheckedUpdateWithoutAutorInput>
    create: XOR<PostsCreateWithoutAutorInput, PostsUncheckedCreateWithoutAutorInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutAutorInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutAutorInput, PostsUncheckedUpdateWithoutAutorInput>
  }

  export type PostsUpdateManyWithWhereWithoutAutorInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutAutorInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id?: IntFilter<"Posts"> | number
    titulo?: StringFilter<"Posts"> | string
    conteudo?: StringFilter<"Posts"> | string
    criadoEm?: DateTimeFilter<"Posts"> | Date | string
    atualizadoEm?: DateTimeNullableFilter<"Posts"> | Date | string | null
    categoria?: StringNullableFilter<"Posts"> | string | null
    autorId?: IntFilter<"Posts"> | number
  }

  export type ComentarioUpsertWithWhereUniqueWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutAutorInput, ComentarioUncheckedUpdateWithoutAutorInput>
    create: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutAutorInput, ComentarioUncheckedUpdateWithoutAutorInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutAutorInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutAutorInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: IntFilter<"Comentario"> | number
    conteudo?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    postId?: IntFilter<"Comentario"> | number
    respostaDeId?: IntNullableFilter<"Comentario"> | number | null
  }

  export type CurtidaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CurtidaWhereUniqueInput
    update: XOR<CurtidaUpdateWithoutUsuarioInput, CurtidaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput>
  }

  export type CurtidaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CurtidaWhereUniqueInput
    data: XOR<CurtidaUpdateWithoutUsuarioInput, CurtidaUncheckedUpdateWithoutUsuarioInput>
  }

  export type CurtidaUpdateManyWithWhereWithoutUsuarioInput = {
    where: CurtidaScalarWhereInput
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CurtidaScalarWhereInput = {
    AND?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
    OR?: CurtidaScalarWhereInput[]
    NOT?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
    id?: IntFilter<"Curtida"> | number
    criadoEm?: DateTimeFilter<"Curtida"> | Date | string
    usuarioId?: IntFilter<"Curtida"> | number
    postId?: IntFilter<"Curtida"> | number
  }

  export type UsuarioCreateWithoutPostsInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPostsInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPostsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
  }

  export type ComentarioCreateWithoutPostInput = {
    conteudo: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
    respostas?: ComentarioCreateNestedManyWithoutRespostaDeInput
    respostaDe?: ComentarioCreateNestedOneWithoutRespostasInput
  }

  export type ComentarioUncheckedCreateWithoutPostInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    respostaDeId?: number | null
    respostas?: ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioCreateOrConnectWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput>
  }

  export type ComentarioCreateManyPostInputEnvelope = {
    data: ComentarioCreateManyPostInput | ComentarioCreateManyPostInput[]
  }

  export type CurtidaCreateWithoutPostInput = {
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaUncheckedCreateWithoutPostInput = {
    id?: number
    criadoEm?: Date | string
    usuarioId: number
  }

  export type CurtidaCreateOrConnectWithoutPostInput = {
    where: CurtidaWhereUniqueInput
    create: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput>
  }

  export type CurtidaCreateManyPostInputEnvelope = {
    data: CurtidaCreateManyPostInput | CurtidaCreateManyPostInput[]
  }

  export type ImagemCreateWithoutPostInput = {
    url: string
    ordem?: number | null
  }

  export type ImagemUncheckedCreateWithoutPostInput = {
    id?: number
    url: string
    ordem?: number | null
  }

  export type ImagemCreateOrConnectWithoutPostInput = {
    where: ImagemWhereUniqueInput
    create: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput>
  }

  export type ImagemCreateManyPostInputEnvelope = {
    data: ImagemCreateManyPostInput | ImagemCreateManyPostInput[]
  }

  export type UsuarioUpsertWithoutPostsInput = {
    update: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPostsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type UsuarioUpdateWithoutPostsInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ComentarioUpsertWithWhereUniqueWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutPostInput, ComentarioUncheckedUpdateWithoutPostInput>
    create: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutPostInput, ComentarioUncheckedUpdateWithoutPostInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutPostInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutPostInput>
  }

  export type CurtidaUpsertWithWhereUniqueWithoutPostInput = {
    where: CurtidaWhereUniqueInput
    update: XOR<CurtidaUpdateWithoutPostInput, CurtidaUncheckedUpdateWithoutPostInput>
    create: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput>
  }

  export type CurtidaUpdateWithWhereUniqueWithoutPostInput = {
    where: CurtidaWhereUniqueInput
    data: XOR<CurtidaUpdateWithoutPostInput, CurtidaUncheckedUpdateWithoutPostInput>
  }

  export type CurtidaUpdateManyWithWhereWithoutPostInput = {
    where: CurtidaScalarWhereInput
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyWithoutPostInput>
  }

  export type ImagemUpsertWithWhereUniqueWithoutPostInput = {
    where: ImagemWhereUniqueInput
    update: XOR<ImagemUpdateWithoutPostInput, ImagemUncheckedUpdateWithoutPostInput>
    create: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput>
  }

  export type ImagemUpdateWithWhereUniqueWithoutPostInput = {
    where: ImagemWhereUniqueInput
    data: XOR<ImagemUpdateWithoutPostInput, ImagemUncheckedUpdateWithoutPostInput>
  }

  export type ImagemUpdateManyWithWhereWithoutPostInput = {
    where: ImagemScalarWhereInput
    data: XOR<ImagemUpdateManyMutationInput, ImagemUncheckedUpdateManyWithoutPostInput>
  }

  export type ImagemScalarWhereInput = {
    AND?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
    OR?: ImagemScalarWhereInput[]
    NOT?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
    id?: IntFilter<"Imagem"> | number
    url?: StringFilter<"Imagem"> | string
    ordem?: IntNullableFilter<"Imagem"> | number | null
    postId?: IntFilter<"Imagem"> | number
  }

  export type PostsCreateWithoutImagensInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    autor: UsuarioCreateNestedOneWithoutPostsInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
    curtidas?: CurtidaCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutImagensInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    autorId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutImagensInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutImagensInput, PostsUncheckedCreateWithoutImagensInput>
  }

  export type PostsUpsertWithoutImagensInput = {
    update: XOR<PostsUpdateWithoutImagensInput, PostsUncheckedUpdateWithoutImagensInput>
    create: XOR<PostsCreateWithoutImagensInput, PostsUncheckedCreateWithoutImagensInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutImagensInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutImagensInput, PostsUncheckedUpdateWithoutImagensInput>
  }

  export type PostsUpdateWithoutImagensInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutImagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsuarioCreateWithoutComentariosInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    posts?: PostsCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComentariosInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComentariosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
  }

  export type PostsCreateWithoutComentariosInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    autor: UsuarioCreateNestedOneWithoutPostsInput
    curtidas?: CurtidaCreateNestedManyWithoutPostInput
    imagens?: ImagemCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutComentariosInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    autorId: number
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPostInput
    imagens?: ImagemUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutComentariosInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutComentariosInput, PostsUncheckedCreateWithoutComentariosInput>
  }

  export type ComentarioCreateWithoutRespostaDeInput = {
    conteudo: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
    post: PostsCreateNestedOneWithoutComentariosInput
    respostas?: ComentarioCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioUncheckedCreateWithoutRespostaDeInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    postId: number
    respostas?: ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioCreateOrConnectWithoutRespostaDeInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput>
  }

  export type ComentarioCreateManyRespostaDeInputEnvelope = {
    data: ComentarioCreateManyRespostaDeInput | ComentarioCreateManyRespostaDeInput[]
  }

  export type ComentarioCreateWithoutRespostasInput = {
    conteudo: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
    post: PostsCreateNestedOneWithoutComentariosInput
    respostaDe?: ComentarioCreateNestedOneWithoutRespostasInput
  }

  export type ComentarioUncheckedCreateWithoutRespostasInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    postId: number
    respostaDeId?: number | null
  }

  export type ComentarioCreateOrConnectWithoutRespostasInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
  }

  export type UsuarioUpsertWithoutComentariosInput = {
    update: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateWithoutComentariosInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PostsUpsertWithoutComentariosInput = {
    update: XOR<PostsUpdateWithoutComentariosInput, PostsUncheckedUpdateWithoutComentariosInput>
    create: XOR<PostsCreateWithoutComentariosInput, PostsUncheckedCreateWithoutComentariosInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutComentariosInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutComentariosInput, PostsUncheckedUpdateWithoutComentariosInput>
  }

  export type PostsUpdateWithoutComentariosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    curtidas?: CurtidaUpdateManyWithoutPostNestedInput
    imagens?: ImagemUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    curtidas?: CurtidaUncheckedUpdateManyWithoutPostNestedInput
    imagens?: ImagemUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutRespostaDeInput, ComentarioUncheckedUpdateWithoutRespostaDeInput>
    create: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutRespostaDeInput, ComentarioUncheckedUpdateWithoutRespostaDeInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutRespostaDeInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutRespostaDeInput>
  }

  export type ComentarioUpsertWithoutRespostasInput = {
    update: XOR<ComentarioUpdateWithoutRespostasInput, ComentarioUncheckedUpdateWithoutRespostasInput>
    create: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
    where?: ComentarioWhereInput
  }

  export type ComentarioUpdateToOneWithWhereWithoutRespostasInput = {
    where?: ComentarioWhereInput
    data: XOR<ComentarioUpdateWithoutRespostasInput, ComentarioUncheckedUpdateWithoutRespostasInput>
  }

  export type ComentarioUpdateWithoutRespostasInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    post?: PostsUpdateOneRequiredWithoutComentariosNestedInput
    respostaDe?: ComentarioUpdateOneWithoutRespostasNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutRespostasInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioCreateWithoutCurtidasInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    posts?: PostsCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateWithoutCurtidasInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioCreateOrConnectWithoutCurtidasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
  }

  export type PostsCreateWithoutCurtidasInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    autor: UsuarioCreateNestedOneWithoutPostsInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
    imagens?: ImagemCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutCurtidasInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
    autorId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
    imagens?: ImagemUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutCurtidasInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutCurtidasInput, PostsUncheckedCreateWithoutCurtidasInput>
  }

  export type UsuarioUpsertWithoutCurtidasInput = {
    update: XOR<UsuarioUpdateWithoutCurtidasInput, UsuarioUncheckedUpdateWithoutCurtidasInput>
    create: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCurtidasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCurtidasInput, UsuarioUncheckedUpdateWithoutCurtidasInput>
  }

  export type UsuarioUpdateWithoutCurtidasInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCurtidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type PostsUpsertWithoutCurtidasInput = {
    update: XOR<PostsUpdateWithoutCurtidasInput, PostsUncheckedUpdateWithoutCurtidasInput>
    create: XOR<PostsCreateWithoutCurtidasInput, PostsUncheckedCreateWithoutCurtidasInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutCurtidasInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutCurtidasInput, PostsUncheckedUpdateWithoutCurtidasInput>
  }

  export type PostsUpdateWithoutCurtidasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
    imagens?: ImagemUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutCurtidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
    imagens?: ImagemUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyAutorInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string | null
    categoria?: string | null
  }

  export type ComentarioCreateManyAutorInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    postId: number
    respostaDeId?: number | null
  }

  export type CurtidaCreateManyUsuarioInput = {
    id?: number
    criadoEm?: Date | string
    postId: number
  }

  export type PostsUpdateWithoutAutorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUpdateManyWithoutPostNestedInput
    imagens?: ImagemUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPostNestedInput
    imagens?: ImagemUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComentarioUpdateWithoutAutorInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutComentariosNestedInput
    respostas?: ComentarioUpdateManyWithoutRespostaDeNestedInput
    respostaDe?: ComentarioUpdateOneWithoutRespostasNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    respostas?: ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CurtidaUpdateWithoutUsuarioInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateManyPostInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    respostaDeId?: number | null
  }

  export type CurtidaCreateManyPostInput = {
    id?: number
    criadoEm?: Date | string
    usuarioId: number
  }

  export type ImagemCreateManyPostInput = {
    id?: number
    url: string
    ordem?: number | null
  }

  export type ComentarioUpdateWithoutPostInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    respostas?: ComentarioUpdateManyWithoutRespostaDeNestedInput
    respostaDe?: ComentarioUpdateOneWithoutRespostasNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    respostas?: ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CurtidaUpdateWithoutPostInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemUpdateWithoutPostInput = {
    url?: StringFieldUpdateOperationsInput | string
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImagemUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImagemUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComentarioCreateManyRespostaDeInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    postId: number
  }

  export type ComentarioUpdateWithoutRespostaDeInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    post?: PostsUpdateOneRequiredWithoutComentariosNestedInput
    respostas?: ComentarioUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutRespostaDeInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    respostas?: ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutRespostaDeInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}