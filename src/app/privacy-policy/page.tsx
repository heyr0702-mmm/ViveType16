import React from "react";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function PrivacyPolicy() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <div className="bg-white/90 p-8 rounded-lg notebook-border shadow-lg max-w-3xl mx-auto w-full">
                <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink mb-6 border-b-2 border-neon-pink pb-2 inline-block">
                    プライバシーポリシー
                </h1>

                <div className="space-y-6 text-sm sm:text-base text-gray-800 leading-relaxed">
                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            1. 個人情報の利用目的
                        </h2>
                        <p>
                            当サイト（CommunicationType16）では、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。<br />
                            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            2. 広告について
                        </h2>
                        <p>
                            当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。<br />
                            クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。<br />
                            Cookieを無効にする方法やGoogleアドセンスに関する詳細は<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">「広告 – ポリシーと規約 – Google」</a>をご確認ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            3. アクセス解析ツールについて
                        </h2>
                        <p>
                            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br />
                            このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            4. 免責事項
                        </h2>
                        <p>
                            当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。<br />
                            また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。<br />
                            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-lg mb-2 border-l-4 border-neon-blue pl-2">
                            5. 運営者情報
                        </h2>
                        <p>
                            <strong>運営者:</strong> CommunicationType16運営チーム<br />
                            <strong>連絡先:</strong> contact@communicationType16.example.com
                        </p>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/">
                        <Button variant="secondary">トップに戻る</Button>
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}
