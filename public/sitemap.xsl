<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">XML Sitemap Index</xsl:when>
            <xsl:otherwise>XML Sitemap</xsl:otherwise>
          </xsl:choose>
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --hover-row: #f1f5f9;
            --badge-bg: #dbeafe;
            --badge-text: #1e40af;
          }

          * { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: var(--bg);
            color: var(--text-main);
            padding: 2.5rem 1rem;
            line-height: 1.5;
          }

          .container { max-width: 1000px; margin: 0 auto; }

          .header {
            background: var(--card-bg);
            padding: 1.75rem;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            margin-bottom: 1.5rem;
            border: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .header h1 { font-size: 1.35rem; font-weight: 700; }
          .header p { color: var(--text-muted); font-size: 0.875rem; margin-top: 0.25rem; }

          .badge {
            background-color: var(--badge-bg);
            color: var(--badge-text);
            font-size: 0.8rem;
            font-weight: 600;
            padding: 0.35rem 0.75rem;
            border-radius: 9999px;
          }

          .search-box { margin-bottom: 1rem; }

          .search-box input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid var(--border);
            border-radius: 8px;
            font-size: 0.9rem;
            outline: none;
            background: var(--card-bg);
          }

          .search-box input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
          }

          .table-container {
            background: var(--card-bg);
            border-radius: 12px;
            border: 1px solid var(--border);
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            overflow: hidden;
          }

          table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; }
          thead { background-color: #f8fafc; border-bottom: 1px solid var(--border); }

          th {
            padding: 0.85rem 1.25rem;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            font-size: 0.75rem;
            letter-spacing: 0.05em;
          }

          tbody tr {
            border-bottom: 1px solid var(--border);
            transition: background-color 0.15s ease;
          }

          tbody tr:last-child { border-bottom: none; }
          tbody tr:hover { background-color: var(--hover-row); }
          td { padding: 0.85rem 1.25rem; }

          .url-link {
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }

          .url-link:hover { color: var(--primary-hover); text-decoration: underline; }
          .counter-col { width: 50px; color: var(--text-muted); font-size: 0.8rem; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div>
              <h1>
                <xsl:choose>
                  <xsl:when test="sitemap:sitemapindex">Sitemap Index</xsl:when>
                  <xsl:otherwise>XML Sitemap</xsl:otherwise>
                </xsl:choose>
              </h1>
              <p>Generado automaticamente via @astrojs/sitemap</p>
            </div>
            <div>
              <span class="badge" id="total-count">
                <xsl:choose>
                  <xsl:when test="sitemap:sitemapindex">
                    <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> Sub-Sitemaps
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs
                  </xsl:otherwise>
                </xsl:choose>
              </span>
            </div>
          </div>

          <div class="search-box">
            <input type="text" id="searchInput" placeholder="Filtrar URLs..." onkeyup="filterTable()"/>
          </div>

          <div class="table-container">
            <table id="sitemapTable">
              <thead>
                <tr>
                  <th class="counter-col">#</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td class="counter-col"><xsl:value-of select="position()"/></td>
                    <td>
                      <a class="url-link">
                        <xsl:attribute name="href"><xsl:value-of select="sitemap:loc"/></xsl:attribute>
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                  </tr>
                </xsl:for-each>

                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="counter-col"><xsl:value-of select="position()"/></td>
                    <td>
                      <a class="url-link" target="_blank">
                        <xsl:attribute name="href"><xsl:value-of select="sitemap:loc"/></xsl:attribute>
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>

        <script>
          function filterTable() {
            const filter = document.getElementById('searchInput').value.toLowerCase();
            const tr = document.getElementById('sitemapTable').getElementsByTagName('tr');
            let count = 0;
            for (let i = 1; i &lt; tr.length; i++) {
              const td = tr[i].getElementsByTagName('td')[1];
              if (td) {
                const txt = td.textContent || td.innerText;
                if (txt.toLowerCase().indexOf(filter) &gt; -1) {
                  tr[i].style.display = "";
                  count++;
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
            document.getElementById('total-count').innerText = count + ' Items Showing';
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>