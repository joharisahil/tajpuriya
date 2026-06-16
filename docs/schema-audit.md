# Schema Audit

## Schema Types in Use
- Organization
- WebSite
- LocalBusiness
- Product
- FAQPage
- BreadcrumbList

## Validation Notes
- Ensure JSON-LD is valid JSON.
- Avoid duplicate schema blocks on the same page.
- Use one breadcrumb trail per page.
- Use one FAQ schema block per page where FAQ content is present.

## Page Coverage
- Home: Organization, WebSite, FAQPage
- About: Organization, BreadcrumbList, FAQPage
- Products: Product, BreadcrumbList, FAQPage
- Industries: BreadcrumbList, FAQPage
- Certifications: BreadcrumbList, FAQPage
- Contact: LocalBusiness, BreadcrumbList, FAQPage

## Local SEO Notes
- Confirm address formatting matches the public contact page.
- Confirm area served is set to India where applicable.
- Confirm contact details are consistent across schema and page content.

## Production Review
- Test structured data in Google Rich Results Test.
- Check for warnings in Search Console after launch.
- Remove any duplicate or stale schema blocks if content changes.
