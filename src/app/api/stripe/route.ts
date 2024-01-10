import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

const settingUrl = process.env.NEXTAUTH_URL + "/setting";
export async function GET() {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return new NextResponse("unauthorised", { status: 401 });
    }

    const userSubscription = await prisma.userSubscription.findUnique({
      where: {
        userId: session.user.id,
      },
    });
    // cancel billing portal
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingUrl,
      });
      return NextResponse.json({ url: stripeSession.url });
    }
    //    user firt time subscrbing
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingUrl,
      cancel_url: settingUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: session.user.email ?? "",
      line_items: [
        {
          price_data: {
            currency: "USD",
            
            product_data: {
              name: "MindGen-AI",
              description: "Unlimted Course Generation",
            },
            unit_amount: 10000,
            recurring: {
              interval: "month",
            },
          },
          quantity:1,
        },
      ],
      metadata:{
        userId:session.user.id
      },
    });
    return NextResponse.json({url:stripeSession.url})
  } catch (error) {
    console.log("{STRIPE ERROR}",error)
    return new NextResponse('internal server error',{status:500})
  }
}
